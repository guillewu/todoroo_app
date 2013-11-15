class ListsController < ApplicationController
  respond_to :json

  def create
    @list = List.new(params[:list])

    if @list.save
      render :json => @list
    else
      render :json => @list.errors, :status => 422
    end
  end

  def index
    @lists = List.all

    render :json => @lists, :include => :notes
  end

  def update
  end

  def destroy
    @list = List.find(params[:id])

    if @list.destroy
      render :json => "success".to_json
    else
      render :json => @list.errors, :status => 422
    end
  end
end
