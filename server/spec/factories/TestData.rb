module TestData
  module_function

  def uploaded_audio
    file = File.open('app/assets/sounds/seed/test.mp3', binmode: true)

    # for performance we skip metadata extraction and assign test metadata
    uploaded_file = Shrine.upload(file, :store, metadata: false)
    uploaded_file.metadata.merge!(
      "size"      => File.size(file.path),
      "mime_type" => "audio/mpeg",
      "filename"  => "test.mp3",
    )

    uploaded_file
  end
end
