import React, {Component} from "react";
import axios from "axios";


class Cocktails extends Component {
    constructor(props) {
        super(props);
        this.state = { cocktails:[] };
    }

componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => {
        this.setState({ cocktails: res.data});
    })
}

render(){
    return (

        
        <p id="mycountries">
            {this.state.cocktails.map(oneCocktail => 
            <span>{oneCocktail.drinks.strDrink} - {oneCocktail.drinks.strCategory} - {oneCocktail.drinks.strInstructions} - {oneCocktail.drinks.strDrinkThumb}</span>)}
        </p>
        );
    }
}

export default Cocktails;

