class AudioUploader < Shrine
  Attacher.validate do
    validate_max_size 100*1024*1024
    validate_extension %w[mp3 mp4 wav]

    validate_mime_type %w[audio/mpeg]
  end
end
