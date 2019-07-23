// Lists all RECIPES on SEARCH PAGE
import React from 'react';
import Axios from 'axios';

const RecipesList = (props) => {
    var recipes = props.recipes
    var display=[]
    for(var i = 0; i < recipes.length; i++) {
        display.push(<div>{recipes[i].title}</div>)
    }
    return(
        <div className='recipes-list'>
        <div className='recipe-individual'>
            <h1>{props.recipes.title}</h1>
            <img src={props.recipes.image} alt="Recipe Image"/>
            {display}
        </div>
    </div>
    )
    
}

export default RecipesList;
