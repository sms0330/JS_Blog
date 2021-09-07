class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes(
    :id, 
    :title,
    :body,
    :image,
    :created_at,
    :updated_at,
    :favourites_count,
    :tags
  )

  # fo multiple file uploads
  def images
    # has_many_attached :images
    
    object.images_attachments.includes(:blob).map do |attachment|
      {
        id: attachment.id,
        name: attachment.name,
        content_type: attachment.blob.filename.to_s,
        url: rails_blob_url(attachment)
      }
    end
  end

  # for a single file upload
  def image 
    attachment = object.image_attachment
    unless attachment.nil?
      {
        id: attachment.id,
        name: attachment.name,
        content_type: attachment.blob.filename.to_s,
        url: rails_blob_url(attachment)
      }
    end
  end
  #-----------------------------Associations--------------->

  belongs_to :user, key: :author

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email
  end

  has_many :comments

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
    
  #-----------------------Custom methods and attributes to render in JSON format--->

  def favourites_count
    object.favourites.count
  end
end