class AddClosedAtToTickets < ActiveRecord::Migration[5.1]
  def change
    add_column :tickets, :closed_at, :datetime
  end
end
