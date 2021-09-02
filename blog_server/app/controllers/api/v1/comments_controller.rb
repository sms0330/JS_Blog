class Api::V1::CommentsController < Api::ApplicationController
    before_action :authenticate_user!, only: [ :create, :destroy ]

    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def create
        post = Post.find params[:post_id]
        comment_params = params.require(:comment).permit(:body)
        comment = Comment.new comment_params
        comment.user = current_user
        comment.post = post
        comment.save!
        render json: { id: comment.id }
    end

    def destroy
        comment = Comment.find params[:id]
        if @comment || @comment.destroy
            head :ok
        else
            head :bad_request
        end
    end

    private

    def record_invalid(error)
        invalid_record = error.record
        errors = invalid_record.errors.map do |field, message|
            {
                type: error.class.to_s, 
                record_type: invalid_record.class.to_s,
                field: field,
                message: message
            }
        end
        render(
            json: {status: 422, errors: errors },
            status: 422 
        )
    end
end
