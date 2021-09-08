module SearchesHelper
    def content_tag(name, content_or_options_with_block = nil, options = nil, escape = true, &block)
        if block_given?
          options = content_or_options_with_block if content_or_options_with_block.is_a?(Hash)
          tag_builder.content_tag_string(name, capture(&block), options, escape)
        else
          tag_builder.content_tag_string(name, content_or_options_with_block, options, escape)
        end
    end
end
