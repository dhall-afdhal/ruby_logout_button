# app.rb
# ================================
# Aplikasi Sinatra sederhana untuk menampilkan tombol logout animasi
# ================================

require 'sinatra'              # framework web Ruby
require 'sinatra/reloader' if development?  # otomatis reload saat edit file (mode dev)

# Konfigurasi server Sinatra
set :bind, '0.0.0.0'   # agar bisa diakses dari localhost
set :port, 4567         # port default (bisa ubah kalau perlu)

# Rute utama (halaman utama)
get '/' do
  erb :index            # render file views/index.erb
end
