class Api::V1::DrinksController < Api::V1::BaseController
	def index
		respond_with Drink.all 
	end

	def create
		respond_with :api, :v1, Drink.create(drink_params)
	end

	private
		def drink_params
			params.require(:drink).permit(:name, :ingredients, :instructions, :drink_type, :tip)
		end
end