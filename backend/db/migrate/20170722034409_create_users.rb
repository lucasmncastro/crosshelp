class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.references :customer, foreign_key: true
      t.string :role

      t.timestamps
    end
  end
end
