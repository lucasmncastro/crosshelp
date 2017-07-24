class Api::V1::CommentsController < ApplicationController
  before_action :set_ticket

  # POST /api/v1/tickets/:ticket_id/comments
  def create
    @comment = @ticket.comments.new(comment_params)
    @comment.user = @current_user

    if @comment.save!
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ticket
      if @current_user.role.customer?
        @ticket = @current_user.tickets.find(params[:ticket_id])
      else
        @ticket = Ticket.find(params[:ticket_id])
      end
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.fetch(:comment, {}).permit(:message, :action)
    end
end
