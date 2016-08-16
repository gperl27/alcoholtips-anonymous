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
		let tipWithQuote = <p className="quote"><i className="fa fa-quote-left fa-2x" aria-hidden="true"></i>{tip}</p>;

		return(
			<div className="drink">
				
				<h2>{name}</h2>
				<hr className="line" />
				{  this.state.active ? null: tipWithQuote }
				{ this.state.active ? <h3>Ingredients</h3> : null}
				<ul>{ this.state.active ? ingredientsList : null}</ul>
				{ this.state.active ? <h3>Instructions</h3> : null}
				<p>{ this.state.active ? instructions : null}</p>
				{ this.state.active ? <h3 className="type space">Type</h3> : null}
				<span className="type">{ this.state.active ? type : null}</span>
				<p className="text-center" onClick={this.handleClick}>  { this.state.active ? <i className="fa fa-chevron-up fa-2x" aria-hidden="true"></i> : <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i> } </p>
			</div>
		)
	}
});