const NewDrink = React.createClass({
	getInitialState(){
		return { active: false }
	},
	handleClick(){
		if(this.state.active){
			let name = this.refs.name.value;
			let ingredients = this.refs.ingredients.value;
			let instructions = this.refs.instructions.value;
			let type = this.refs.type.value;
			let tip = this.refs.tip.value;

			$.ajax({
				url: '/api/v1/drinks',
				type: 'POST',
				data: { drink: {
					name: name,
					ingredients: ingredients,
					instructions: instructions,
					drink_type: type,
					tip: tip
				}},
				success: (drink) => {
					this.props.handleSubmit(drink);
				}
			});
		}
		this.setState({ active: !this.state.active });
	},
	handleOpen(){
		//this.setState({active: this.state.active});
	},
	handleExit(){
		this.setState({ active: !this.state.active});
	},
	render(){
		var addDrink = this.state.active ? 
					<div className="my-modal">
						<div className="popup">
							<h2>Add Drink</h2>
							<hr className="line" />
							<p>
								<label>Drink Name</label><br/>
								<input ref='name' placeholder="Enter drink name" />
							</p>
							<p>
								<label>Type</label><br/>
								<select ref="type">
									<option value="Beer">Beer</option>
									<option value="Shot">Shot</option>
									<option value="Cocktail">Cocktail</option>
									<option value="Martini">Martini</option>
									<option value="Malt">Malt</option>
									<option value="Mixed Drink">Mixed Drink</option>
								</select>
							</p>
							<p>
								<label>Ingredients <span className="warning">(Separate by commas)</span></label><br/>
								<textarea rows="3" ref='ingredients' placeholder="Enter, ingredients, like, this" />
							</p>
							<p>
								<label>Instructions</label><br/>
								<textarea rows="3" ref='instructions'
											placeholder="1. Fill out this form. 2. Do something else" />
							</p>
							<p>
								<label>Your Tip</label><br/>
								<textarea rows="3" ref='tip'
											placeholder="After drinking this, I never will look at chex mix the same." />
							</p>
							<button className="btn btn-success add" onClick={this.handleClick}>Submit</button>
							<button className="btn btn-danger close-button" onClick={this.handleExit}>X</button>
						</div>
					</div>
					: null;
		return(
			<div>
				{addDrink}
				{this.state.active ? null : <button className="addButton btn btn-info" onClick={this.handleExit}>New Tip +</button> }
			</div>
		)
	}
})