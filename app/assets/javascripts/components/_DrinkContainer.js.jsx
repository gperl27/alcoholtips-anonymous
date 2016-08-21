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
				<div className="col-md-2 text">
				</div>
				<a href="https://github.com/gperl27/alcoholtips-anonymous" target="_blank"><button className='btn btn-primary docs'>Docs</button></a>
			</div>
		)
	}
})