class Drink < ApplicationRecord
	validates :ingredients, presence: true
end
