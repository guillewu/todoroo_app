class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :list_id, :null => false
      t.text :body, :null => false

      t.timestamps
    end
    add_index :notes, :list_id
  end
end
