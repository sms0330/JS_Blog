class PostCollectionSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes(
    :id, 
    :title,
    :body,
    :image,
    :created_at,
    :updated_at,
    :tags
  )
  belongs_to :user, key: :author

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
end
