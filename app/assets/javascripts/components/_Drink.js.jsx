const Drink = React.createClass({
	getInitialState() {
		return { active: false }
	},
	handleClick(){
		this.setState({ active: !this.state.active});
	},
	render() {
		let name = this.props.drink.name;
		//let ingredients = this.props.drink.ingredients;
		let ingredientsList = [];

		let ingredients = this.props.drink.ingredients.split(',');

		for (var i =0;i<ingredients.length; i++){
			ingredientsList.push(<li key={i}>{ingredients[i]}</li>)
		}
		let instructions = this.props.drink.instructions;
		let type = this.props.drink.drink_type;
		let tip = this.props.drink.tip;

		return(
			<div>
				<h3 onClick={this.handleClick}>{name}</h3>
				<ul>{ this.state.active ? ingredientsList : null}</ul>
				<p>{ this.state.active ? instructions : null}</p>
				<p>{ this.state.active ? type : null}</p>
				<p>{ this.state.active ? null: tip }</p>
			</div>
		)
	}
});