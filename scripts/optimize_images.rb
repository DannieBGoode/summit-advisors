#!/usr/bin/env ruby
# Batch-converts JPG/PNG images in assets/uploads/ to WebP using MiniMagick.
# - Skips files that already have a .webp counterpart
# - Resizes to max 1920px wide (height auto-scales)
# - JPG/JPEG: lossy WebP at quality 80
# - PNG: lossless WebP (preserves exact pixels — important for logos/graphics)
#
# Usage: ruby scripts/optimize_images.rb
# Requires: ImageMagick installed on the system + `gem 'mini_magick'` in Gemfile

require 'mini_magick'
require 'find'

UPLOADS_DIR = File.expand_path('../assets/uploads', __dir__)
MAX_WIDTH    = 1920
QUALITY      = 80
EXTENSIONS   = %w[.jpg .jpeg .png].freeze

total_saved  = 0
converted    = 0
skipped      = 0

Find.find(UPLOADS_DIR) do |path|
  next unless File.file?(path)
  ext = File.extname(path).downcase
  next unless EXTENSIONS.include?(ext)

  webp_path = path.sub(/\.[^.]+$/, '.webp')

  if File.exist?(webp_path)
    skipped += 1
    next
  end

  original_size = File.size(path)

  begin
    image = MiniMagick::Image.open(path)

    # Only resize if wider than max
    if image.width > MAX_WIDTH
      image.resize "#{MAX_WIDTH}>"
    end

    image.format 'webp'

    if ext == '.png'
      # Lossless WebP for PNGs — preserves exact pixels for logos/graphics
      image.define 'webp:lossless=true'
    else
      # Lossy WebP for JPGs — large savings, negligible visible difference at 80
      image.quality QUALITY.to_s
    end

    image.write webp_path

    new_size  = File.size(webp_path)
    saved     = original_size - new_size
    total_saved += saved
    converted += 1

    mode = ext == '.png' ? 'lossless' : "lossy q#{QUALITY}"
    savings_pct = ((saved.to_f / original_size) * 100).round(1)
    puts "  ✓ #{File.basename(path)} → #{File.basename(webp_path)} " \
         "(#{(original_size / 1024.0 / 1024).round(2)} MB → #{(new_size / 1024.0).round(0)} KB, -#{savings_pct}%, #{mode})"
  rescue => e
    puts "  ✗ #{File.basename(path)}: #{e.message}"
  end
end

puts
puts "Done. #{converted} images converted, #{skipped} already had WebP."
puts "Total saved: #{(total_saved / 1024.0 / 1024).round(2)} MB"
