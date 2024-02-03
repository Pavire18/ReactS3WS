import './RecipeDetail.css';
import React from 'react';



const RecipeDetail = ({selectedRecipe,addIngredient,removeIngredient}) => {

    const ingredientNameRef = React.useRef();
    const quantityRef = React.useRef();

    const createIngredient = () =>{
        const newIngredient={
            name:ingredientNameRef.current.value,
            quantity:quantityRef.current.value
        }
        addIngredient(newIngredient);
        ingredientNameRef.current.value='';
        quantityRef.current.value='';
    }

    return (
        <div className='recipe-detail'>
            <h3>Receta seleccionada:</h3>
           {selectedRecipe.id ?
                <div>
                    <img className='recipe-detail__img' src={selectedRecipe.imageUrl}/>
                    <div className='recipe-detail__data'>
                        <p className='recipe-detail__text'><strong>{selectedRecipe.name}</strong></p>
                        <p className='recipe-detail__text'>Número de personas: {selectedRecipe.numPeople} </p>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Ingrediente</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedRecipe.ingredients.map(ingredient =>
                            <tr key={ingredient.name}>
                                <td>{ingredient.name}</td>
                                <td>{ingredient.quantity}</td>
                                <td><button onClick={() => removeIngredient(ingredient)}>Eliminar</button></td>
                            </tr>
                            )}
                            <tr>
                                <td><input ref={ingredientNameRef} type='text'/></td>
                                <td><input ref={quantityRef} type='text'/></td>
                                <td><button onClick={createIngredient}>Añadir</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div> : null
           }
        </div>
    )
}

export default RecipeDetail;