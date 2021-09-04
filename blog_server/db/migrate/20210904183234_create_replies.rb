class CreateReplies < ActiveRecord::Migration[6.1]
  def change
    create_table :replies do |t|
      t.text :body
      t.references :comment, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
