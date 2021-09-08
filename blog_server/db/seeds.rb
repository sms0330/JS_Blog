Like.destroy_all
Tagging.destroy_all
Tag.destroy_all
User.delete_all
Post.destroy_all
Comment.destroy_all
Reply.destroy_all

PASSWORD='1234'
super_user=User.create(
    first_name: 'Jon',
    last_name: 'Snow',
    email: 'sms0330@gmail.com',
    password: PASSWORD,
    is_admin: true
)

10.times do
    first_name=Faker::Name.first_name
    last_name=Faker::Name.last_name
    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name}@example.com",
        password: PASSWORD
    )
end
users=User.all

NUM_TAGS = 20

NUM_TAGS.times do
    Tag.create(
        name: Faker::Vehicle.make
    )
end

tags = Tag.all

50.times do
    created_at = Faker::Date.backward(days:365 * 5)
        p = Post.create(
        title: Faker::Company.industry,
        body: Faker::ChuckNorris.fact,
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
        )
        if p.valid?
            rand(1..10).times.map do
            c = Comment.create(body: Faker::GreekPhilosophers.quote,  user: users.sample, post: p)
            c.likers = users.shuffle.slice(0, rand(users.count))
                if c.valid?
                    rand(1..5).times.map do
                    Reply.create(body: Faker::GreekPhilosophers.quote,  user: users.sample, comment: c)
                    end
                end
            end
        end
        p.tags = tags.shuffle.slice(0, rand(tags.count))
end

posts = Post.all
comments = Comment.all
replies = Reply.all

puts "Generated #{posts.count} posts"
puts "Generated #{comments.count} comments"
puts "Generated #{replies.count} replies"
puts "Generated #{users.count} users"
puts "Generated #{Like.count} likes"
puts "Generated #{Tag.count} tags"
puts "Login with #{super_user.email} and password: #{PASSWORD}"