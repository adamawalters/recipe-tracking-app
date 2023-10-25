import React from "react";
import RecipeRow from "./RecipeRow";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  /*Create a table row for each recipe in the list. Put the rows in an array */
  const tableRows = recipes.map((recipe, index) => {
    return <RecipeRow key={index} recipe={recipe} deleteRecipe={()=>deleteRecipe(index)}/>
  });

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
