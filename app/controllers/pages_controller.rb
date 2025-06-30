class PagesController < ApplicationController
  def index
    render inertia: "pages/Index"
  end
end
