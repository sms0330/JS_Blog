class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :created_at, :updated_at, :author_name, :like_count

  belongs_to :user, key: :author
  has_many :replies

  class ReplySerializer < ActiveModel::Serializer
    attributes :id, :body, :created_at, :updated_at, :replier_name

    belongs_to :comment
    belongs_to :user, key: :replier

    def replier_name
      object.user&.name
    end
  end
  
  def author_name
    object.user&.name
  end

  def like_count
    object.likes.count
  end
end
