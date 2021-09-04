# note that 'Api::V1::UploadsController' comes from how I defined my routes
class Api::V1::UploadsController < Api::ApplicationController

    # # these lines allow me to access the 'current_user' hash
    # before_action :authenticate_user!, only: [ :create, :destroy, :update ]
  
    def create
      newImage = Upload.new
      # note that the 'file' key for the 'newImage' hash corresponds to the field
      # in the database table where the image file reference is stored
      newImage.file = params["image"]
      newImage.user = current_user
      if newImage.save
        render json: Upload.last
      end
    end
  end