class SearchesController < ApplicationController
  def result
    @posts = eval(params[:bulletin]).where('created_at >= :years_ago', :years_ago => Time.now - 1.years).where("lower(title) || lower(body) like ?", "%#{params[:search_text.downcase]}%")
  end
end