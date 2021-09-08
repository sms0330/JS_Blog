class PostSerializer < ActiveModel::Serializer
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

  #-----------------------------Associations--------------->

  belongs_to :user, key: :author

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email
  end

  has_many :comments


  #-----------------------Custom methods and attributes to render in JSON format--->

  def favourites_count
    object.favourites.count
  end
end