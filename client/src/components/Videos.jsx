import React from 'react';
import Axios from 'axios';

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          current: {}
        }
        this.searchVideoClick = this.searchVideoClick.bind(this);
      }
    const config = {
        headers: {
            "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "X-RapidAPI-Key": "c0ab770b89mshba6e00c259bd657p1c5ce0jsn80d88c4698aa"
        }
    }
    searchVideoClick(e) {
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?query=${e.target.value}&minLength=0&maxLength=999&offset=0&number=100`
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

export default Videos;