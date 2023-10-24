import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  /*Accepts a formData object and sets the "recipe" state to a new array with all of the current recipe objects + the latest recipe */
  const addRecipe = (formData) => {
    setRecipes(currentRecipes => [...currentRecipes, formData]);
  };

  //console.log(recipes)

  /*Filter to recipes whose index does not match the index to be deleted. Set recipe state to this array*/
  const deleteRecipe = (deletedIndex) => {
    const newRecipes = recipes.filter((recipe, index) => {
      return index !== deletedIndex;
    })
    setRecipes([...newRecipes])
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
