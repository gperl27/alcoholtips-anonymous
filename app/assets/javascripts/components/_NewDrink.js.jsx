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
	handleExit(){
		this.setState({ active: !this.state.active});
	},
	render(){
		var addDrink = this.state.active ? <div>
							<p>
								<label>Name</label>
								<input ref='name' />
							</p>
							<p>
								<label>ingredients</label>
								<input ref='ingredients' />
							</p>
							<p>
								<label>instructions</label>
								<input ref='instructions' />
							</p>
							<p>
								<label>type</label>
								<input ref='type' />
							</p>
							<p>
								<label>tip</label>
								<input ref='tip' />
							</p>
							<button onClick={this.handleExit}>x</button>
						</div>
					: null;
		return(
			<div>
				{addDrink}
				<button onClick={this.handleClick}> {this.state.active ? 'Add Drink' : 'New Tip +' }</button>
			</div>
		)
	}
})