class Note < ActiveRecord::Base
  attr_accessible :list_id, :body

  validates :list_id, :body, :presence => true

  belongs_to :list
end
