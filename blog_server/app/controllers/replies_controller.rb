class RepliesController < ApplicationController
    before_action :authenticate_user!, except: [:show, :index]

    def create
        @reply = Reply.new reply_params
        @comment  = Comment.find params[:comment_id]
        @reply.comment = @comment
        @reply.save
        comment_anchor = ActionController::Base.helpers.dom_id(@comment)
        # replysMailer.delay(run_at: 5.minutes.from_now).notify_comment_owner(@reply)
        redirect_to post_path(@comment.post, anchor: comment_anchor), notice: "Reply created!"
    end


    def destroy
        reply = Reply.find params[:id]
        if can? :crud, reply
            reply.destroy
            redirect_to post_path(reply.comment.post_id), notice: "Reply Deleted!"
        else
            redirect_to root_path, alert: "Not authorized!"
        end
    end
    
    private

    def reply_params
    params.require(:reply).permit(:body)
    end
end
