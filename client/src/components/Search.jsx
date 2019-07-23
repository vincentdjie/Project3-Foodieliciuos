// SEARCH RESULTS PAGE
import React from 'react';
import Axios from 'axios';
import Link from 'react-router';
import HeaderTab from './HeaderTab';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: {},
            videos: {}
        }
    }

    //API Calls
    searchRecipeClick(e) {
        const config = {
            headers: {
                "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "X-RapidAPI-Key": "c0ab770b89mshba6e00c259bd657p1c5ce0jsn80d88c4698aa"
            }
        }
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=100&ranking=1&ignorePantry=false&ingredients=${e.target.value}`
        axios.get(url, config).then(result => {
            this.setState({
                recipes: result.data
            })
        })
    }
    searchVideoClick(e) {
        const config = {
            headers: {
                "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "X-RapidAPI-Key": "c0ab770b89mshba6e00c259bd657p1c5ce0jsn80d88c4698aa"
            }
        }
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?query=${e.target.value}&minLength=0&maxLength=999&offset=0&number=100`
        axios.get(url, config).then(result => {
            this.setState({
                videos: result.data
            })
        })
    }

    render() {
        return(
            <div className='header'>
                <HeaderTab recipes={this.state.recipes} videos={this.state.videos} />  
            </div>
        );
    }
}

export default Search;