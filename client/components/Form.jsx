import React from "react";
import axios from "axios";
import SPOON_API from "../../api.js";
import RecipeList from "./RecipeList.jsx";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: "",
      recipes: [],
    };

    //bind methods here:
    this.getRecipes = this.getRecipes.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getRecipes(ingredients, key = SPOON_API) {
    // console.log("ingredients here:", this.state.ingredients);
    // console.log("ahjaf", SPOON_API);
    event.preventDefault();

    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.state.ingredients}&number=3&ranking=2&ignorePantry=true&apiKey=${SPOON_API}`
      )
      .then((results) => {
        this.setState({ recipes: results.data });
        console.log("this.state of recipes", this.state.recipes);
      })
      .catch((err) => {
        console.log("err in getRecipes", err);
      });
  }

  handleChange(event) {
    // console.log("event here", event.target.value);
    this.setState({ ingredients: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>What's in your fridge?</h2>
        <input
          name="ingredients"
          type="text"
          placeholder="Please list ingredients separated by commas"
          value={this.state.ingredients}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.getRecipes}>Submit</button>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default Form;
