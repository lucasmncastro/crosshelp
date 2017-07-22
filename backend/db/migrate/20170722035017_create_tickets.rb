class CreateTickets < ActiveRecord::Migration[5.1]
  def change
    create_table :tickets do |t|
      t.string :title
      t.text :message
      t.string :status
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
