class PostMailer < ApplicationMailer
    def hello_world
        mail(
            to: 'stephanie@codecore.ca',
            from: 'anyone@example.com',
            cc: 'someone.else@example.com',
            bcc: 'another.person@example.com',
            subject: 'Hello World'
        )
    end

    def new_post(post)
        @post = post
        @owner = @post.user
        mail(
            to: @owner.email,
            subject: "#{@post.user.full_name}, Your post is succesfully created"
        )
    end

    def new_comment(comment)
        @comment = comment
        @post = comment.post
        @owner = @post.user
        mail(to: @owner.email, subject: 'You got a new comment')
    end
end
