class NotesController < ApplicationController
  respond_to :json
  
  def create
    @note = Note.new(params[:note])

    if @note.save
      render :json => @note
    else
      render :json => @note.errors, :status => 422
    end
  end

  def destroy
    @note = Note.find(params[:id])

    if @note.destroy
      render :json => "success".to_json
    else
      render :json => @note.errors, :status => 422
    end
  end
end
