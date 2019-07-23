import React from 'react';
import Axios from 'axios';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          current: {}
        }
        this.searchRecipeClick = this.searchRecipeClick.bind(this);
      }
    const config = {
        headers: {
            "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "X-RapidAPI-Key": "c0ab770b89mshba6e00c259bd657p1c5ce0jsn80d88c4698aa"
        }
    }
    searchRecipeClick(e) {
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=100&ranking=1&ignorePantry=false&ingredients=${e.target.value}`
        axios.get(url, config).then(result => {
            this.setState({
                current: result.data
            })
        })
    }

    render() {
        return (
            <div className='search-elements'>
                <input type="text" className='search-bar' placeholder='Enter a search keyword...'/>
            </div>

            <div className='recipe-list'></div>
        );
    }
}

export default Recipes;