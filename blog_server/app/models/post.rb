class Post < ApplicationRecord
    has_many :comments, dependent: :destroy

    has_many :favourites, dependent: :destroy
    has_many :favouriters, through: :favourites, source: :user

    has_many :taggings, dependent: :destroy
    has_many :tags, through: :taggings

    validates :title, presence: true, uniqueness: true
    validates :body, presence: true, length: {minimum: 30}
    belongs_to :user, optional: true

    has_one_attached(:image)

    has_many_attached(:images)
   
    # has_one :file_attachment, dependent: :destroy
    # has_one :file_blob, through: :file_attachment

    def tag_names
        self.tags.map(&:name).join(", ")
    end

    def tag_names=(rhs)
        self.tags = rhs.strip.split(/\s*,\s*/).map do |tag_name|
            Tag.find_or_initialize_by(name: tag_name)
        end
    end
end
