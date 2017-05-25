json.data(@comments) { |d| json.extract!(d, :id, :author, :content) }
