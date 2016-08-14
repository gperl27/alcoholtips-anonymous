const DrinkList = React.createClass({
	render(){
		let drinks = this.props.drinks.map((drink) => {
			return(
				<div key={drink.id}>
					<Drink drink={drink}/>
				</div>
			)
		});
		return (
			<div>
				{drinks}
			</div>
		)
	}
});