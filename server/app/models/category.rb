class Category < ApplicationRecord
  # validates :name, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z]+\z/, message: "Allows only letters" }, length: { in: 4..20 }

  has_and_belongs_to_many :posts
end
