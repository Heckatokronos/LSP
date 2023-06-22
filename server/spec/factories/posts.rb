FactoryBot.define do
  factory :post do
    title { 'Test title' }
    body { 'This is a test body for post' }
    author { 'TestAuthor' }
    audio_data { TestData.uploaded_audio.to_json }
  end

  trait :with_categories do
    after(:create) do |post|
      post.categories << create_list(:category, 4)
    end
  end
end
