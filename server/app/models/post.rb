class Post < ApplicationRecord
  include AudioUploader::Attachment(:audio)

  validates :title, :body, :author, :audio_data, presence: true

  validates :author, length: { minimum: 4 }
  validates :body, length: { minimum: 10 }

  has_and_belongs_to_many :categories
end
