import './App.css';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeForm from './components/RecipesForm/RecipesForm';
import React from 'react';

const API_URL='http://localhost:4000/recipes'

function App() {

  const [recipeList, setRecipeList]=React.useState([]);
  const [selectedRecipe, setSelectedRecipe]=React.useState({});


const getAllRecipesFromApi = () =>{
  fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((data) => {
      setRecipeList(data);
    })
    .catch((error) => {
        alert("ERROR API");
        console.log(error +" - ERROR API");
    });
}
  React.useEffect(() => {
    getAllRecipesFromApi();
}, []);


  const addRecipe = (recipe) =>{
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => {
        getAllRecipesFromApi();
      });
  }

  const addIngredient = (newIngredient) =>{
    const newRecipe={
      ...selectedRecipe,
      ingredients:[...selectedRecipe.ingredients, newIngredient]
    }
    fetch(API_URL+'/'+newRecipe.id, {
      method: "PUT",
      body: JSON.stringify(newRecipe),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => {
        setSelectedRecipe(newRecipe)
      });
  }



  const removeIngredient = (ingredient) =>{


    selectedRecipe.ingredients.splice(selectedRecipe.ingredients.indexOf(ingredient),1);

    const newRecipe={
      ...selectedRecipe,
      ingredients:[...selectedRecipe.ingredients]
    }
    fetch(API_URL+'/'+newRecipe.id, {
      method: "PUT",
      body: JSON.stringify(newRecipe),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => {
        setSelectedRecipe(newRecipe)
      });
  }


  return (
    <div className="App">
      <RecipeForm addRecipe={addRecipe}/>
      <RecipeList recipes={recipeList} showRecipeDetail={setSelectedRecipe}/>
      <RecipeDetail selectedRecipe={selectedRecipe} addIngredient={addIngredient} removeIngredient={removeIngredient}/>
    </div>
  );
}

export default App;
