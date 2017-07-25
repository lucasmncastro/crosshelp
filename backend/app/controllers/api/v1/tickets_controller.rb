class Api::V1::TicketsController < ApplicationController
  before_action :set_ticket, only: [:show, :update, :destroy]

  has_scope :with_status

  # GET /tickets
  def index
    if @current_user.role.customer?
      @tickets = apply_scopes(@current_user.tickets)
    else
      @tickets = apply_scopes(Ticket.all)
    end

    render json: @tickets
  end

  # GET /tickets/1
  def show
    render json: @ticket
  end

  # POST /tickets
  def create
    @ticket = Ticket.new(ticket_params)
    @ticket.user = @current_user

    if @ticket.save
      render json: @ticket, status: :created, location: ['api', 'v1', @ticket]
    else
      render json: @ticket.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tickets/1
  def update
    if @ticket.update(ticket_params)
      render json: @ticket
    else
      render json: @ticket.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tickets/1
  def destroy
    @ticket.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ticket
      if @current_user.role.customer?
        @ticket = @current_user.tickets.find(params[:id])
      else
        @ticket = Ticket.find(params[:id])
      end
    end

    # Only allow a trusted parameter "white list" through.
    def ticket_params
      params.fetch(:ticket, {}).permit(:title, :message, :user_id)
    end
end
