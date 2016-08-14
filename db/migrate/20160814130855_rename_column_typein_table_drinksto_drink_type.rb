class RenameColumnTypeinTableDrinkstoDrinkType < ActiveRecord::Migration[5.0]
  def change
  	rename_column :drinks, :type, :drink_type
  end
end
