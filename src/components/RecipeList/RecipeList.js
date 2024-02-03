import React from 'react';
import Recipe from '../Recipe/Recipe';
import './RecipeList.css';

const RecipeList = React.memo((props) =>{

    return(

        <div className='recipe-list'>
            <h3>Listado de recetas:</h3>
            {props.recipes.map(recipe =>
                <Recipe key={recipe.id} recipe={recipe} showRecipeDetail={props.showRecipeDetail}/>
                )}
        </div>
    )
})

export default RecipeList;