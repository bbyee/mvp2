import React from "react";
import RecipeEntry from "./RecipeEntry.jsx";

const RecipeList = props => {
  console.log("props here", props);
  return (
    <div>
      {props.recipes.map(recipe => {
        return <RecipeEntry id={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipeList;
