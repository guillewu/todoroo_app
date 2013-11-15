class List < ActiveRecord::Base
  attr_accessible :title

  validates :title, :presence => true

  has_many :notes, dependent: :destroy
end
