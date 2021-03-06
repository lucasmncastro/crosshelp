class Comment < ApplicationRecord
  extend Enumerize
  
  # Actions can change the ticket:
  #
  # - none: no effect on ticket status. 
  # - close: change ticket status to close.
  # - reopen: re-open the ticket.
  enumerize :action, in: %w(none close reopen), default: :none

  belongs_to :ticket
  belongs_to :user

  after_save :update_ticket

  def as_json(options={})
    {
      id: id,
      message: message,
      action: action,
      user: user,
      author: user.name,
      created_at: created_at
    }
  end

  private
  def update_ticket
    case action
    when 'close' then  ticket.close!
    when 'reopen' then ticket.reopen!
    end
  end
end
