class User < ApplicationRecord
    has_secure_password
    has_many :posts, dependent: :nullify
    has_many :comments, dependent: :nullify
    has_many :replies, dependent: :nullify

    has_many :favourites
    has_many :favourited_posts, through: :favourites, source: :post

    has_many :likes
    has_many :liked_comments, through: :likes, source: :comment

    validates :first_name, presence: true
    validates :last_name, presence: true
    VAILD_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, presence: true, uniqueness: true, format: VAILD_EMAIL_REGEX, unless: :from_oauth?

    def full_name
        "#{first_name} #{last_name}".strip.titlecase
    end

    def from_oauth?
        uid.present? && provider.present?
    end

    def self.create_from_oauth(oauth_data)
        name = oauth_data["info"]["name"]&.split || oauth_data["info"]["nickname"]
        self.create(
            first_name: name[0],
            last_name: name[1] || "",
            uid: oauth_data["uid"],
            provider: oauth_data["provider"],
            oauth_raw_data: oauth_data,
            password: SecureRandom.hex(32)
        )
    end

    def self.find_by_oauth(oauth_data)
        self.find_by(
            uid: oauth_data["uid"],
            provider: oauth_data["provider"]
        )
    end

end
