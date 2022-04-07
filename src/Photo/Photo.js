import React, {Component} from "react";
import axios from "axios";


class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = { photos: []};
    }

componentDidMount(){
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        this.setState({ photos: res.data});
    })
}

render(){
    return (

        

            
        <p id="myphoto">
            {this.state.photos.map(onePhoto => 
            <span>{onePhoto.photos}</span>)}
        </p>

                
        );
    }
}

export default Photos;