class HomeController < ApplicationController
  def index
    @todos = %w(hoge hage)
  end
end
