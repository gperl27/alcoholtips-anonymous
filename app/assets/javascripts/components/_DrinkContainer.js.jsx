const DrinkContainer = React.createClass({
	getInitialState() {
		return { drinks: [] }
	},

	componentDidMount() {
		$.getJSON('/api/v1/drinks.json', (response) => { this.setState({ drinks: response })});
	},
	handleSubmit(drink){
		let newState = this.state.drinks.concat(drink);
		this.setState({ drinks: newState });
	},
	render() {
		return (
			<div className="container row">
				<div className="col-md-2">
					<NewDrink handleSubmit={this.handleSubmit}/>
				</div>
				<div className="col-md-8">
					<DrinkList drinks={this.state.drinks} />
				</div>
				<div className="col-md-2">
					<p>Hello world</p>
				</div>
			</div>
		)
	}
})