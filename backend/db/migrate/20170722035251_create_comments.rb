class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.references :ticket, foreign_key: true
      t.text :message
      t.string :action
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
