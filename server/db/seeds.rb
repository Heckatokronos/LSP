Post.destroy_all

4.times do
  uploader = AudioUploader.new(:store)
  file = File.new(Rails.root.join('app/assets/sounds/seed/test.mp3'))


  post = Post.create!(
    title: Faker::Commerce.product_name,
    body: Faker::Markdown.emphasis,
    author: Faker::Name.name,
    audio: uploader.upload(file)
  )

  4.times do
    category = Category.new(name: Faker::Book.unique.genre)
    post.categories << category
    post.save
  end

  puts "* #{post.title}"

  post.categories.each { |n| puts n.name }
end
