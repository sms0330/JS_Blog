class Reply < ApplicationRecord
    belongs_to :comment
    belongs_to :user, optional: true
    validates :body, presence: true
end
