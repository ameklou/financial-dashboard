class ProjectsController < ApplicationController

  def index
    render inertia: "projects/Index"
  end
end
