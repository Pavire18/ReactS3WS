import React from 'react';
import './RecipesForm.css';

const RecipeForm = (props) =>{

    const recipeNameRef = React.useRef();
    const numberOfPeopleRef = React.useRef();
    const imageUrlRef = React.useRef();

    const createNewRecipe = (event) =>{
        event.preventDefault();
        const newRecipe={
            name:recipeNameRef.current.value,
            numPeople:numberOfPeopleRef.current.value,
            imageUrl:imageUrlRef.current.value,
            ingredients: []
        };
        props.addRecipe(newRecipe);
        recipeNameRef.current.value='';
        numberOfPeopleRef.current.value='';
        imageUrlRef.current.value='';
    }

    return(
        <form onSubmit={(event) => createNewRecipe(event)}>
                <h3>Añade una nueva receta:</h3>
                <label>
                    Introduce un nombre:
                </label>
                <div>
                    <input ref={recipeNameRef}  type="text" name="name" id="name" />
                </div>


                <label>
                    Introduce el número de personas:
                </label>
                <div>
                    <input ref={numberOfPeopleRef}  type="text" name="name" id="name" />
                </div>

                <label>
                    Introduce la url de la imagen:
                </label>
                <div>
                    <input ref={imageUrlRef}  type="text" name="name" id="name" />
                </div>


            <button>Añadir receta</button>
        </form>
)
}

export default RecipeForm;