import './Recipe.css';
import React from 'react';

const Recipe = React.memo(({recipe,showRecipeDetail}) =>{

    const recipeRef = React.useRef();

    const selectRecipe = () =>{
        showRecipeDetail(recipe);
    }

    return(
        <div  ref={recipeRef} className='recipe' onClick={selectRecipe}>
            <img className='recipe__image' src={recipe.imageUrl}/>
            <div className='recipe__data'>
                <p className='recipe__text'><strong>{recipe.name}</strong></p>
                <p className='recipe__text'>Número de personas: {recipe.numPeople} </p>
            </div>
        </div>
    )
})

export default Recipe;