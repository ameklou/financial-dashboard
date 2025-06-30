class CreateProjects < ActiveRecord::Migration[8.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.date :start
      t.date :end
      t.decimal :budget
      t.string :priority
      t.string :status

      t.timestamps
    end
  end
end
