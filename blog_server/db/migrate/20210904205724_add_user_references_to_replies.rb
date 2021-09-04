class AddUserReferencesToReplies < ActiveRecord::Migration[6.1]
  def change
    add_reference :replies, :user, index: true, foreign_key: true
  end
end
