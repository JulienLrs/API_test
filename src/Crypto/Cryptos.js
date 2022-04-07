import React, {Component} from "react";
import axios from "axios";


class Cryptos extends Component {
    constructor(props) {
        super(props);
        this.state = { cryptos: []};
    }

componentDidMount(){
    axios.get('https://api.coingecko.com/api/v3/exchange_rates')
    .then(res => {
        this.setState({ cryptos: res.data});
    })
}

render(){
    return (
        <div>   
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th> 
                    </tr>

                    
        <p id="mycrypto">
            {this.state.cryptos.map(oneCrypto => 
            <span>{oneCrypto.rates}</span>)}
        </p>
        
                </thead>
            </table>    
        </div>
        );
    }
}

export default Cryptos;