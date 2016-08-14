class CreateDrinks < ActiveRecord::Migration[5.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.text :ingredients
      t.text :instructions
      t.string :type
      t.text :tip

      t.timestamps
    end
  end
end
