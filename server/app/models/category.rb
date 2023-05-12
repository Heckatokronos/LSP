class Category < ApplicationRecord
  validates :name, presence: true,
                   uniqueness: true,
                   format: { with: /\A[a-zA-Z]+\z/, message: "Allows only letters" },
                   length: { in: 4..20 }
  has_many :posts
end
