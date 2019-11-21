import React from "react";
import SPOON_API from "../../api.js";
import axios from "axios";

class RecipeEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0,
      selectedTitle: "",
      selectedImage: "",
      selectedLikes: 0,
      sourceUrl: "",
      showLink: false,
      selectedInstructions: ""
    };

    this.getRecipeInfo = this.getRecipeInfo.bind(this);
  }

  getRecipeInfo(key = SPOON_API) {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${this.props.recipe.id}/information?includeInstruction=true&apiKey=${SPOON_API}`
      )
      .then(results => {
        console.log("results of click on food name", results);
        this.setState({
          selectedId: results.data.id,
          selectedTitle: results.data.title,
          selectedImage: results.data.image,
          sourceUrl: results.data.sourceUrl,
          selectedInstructions: results.data.instructions
        });
        console.log(
          "selected state:",
          // this.state.selectedId,
          // this.state.selectedTitle,
          // this.state.selectedImage,
          // this.state.sourceUrl,
          this.state.selectedInstructions
        );
      })

      .catch(err => {
        console.log("err getting recipe info", err);
      });
  }

  render() {
    return (
      <div>
        <h2
          className="title"
          onClick={() => {
            this.getRecipeInfo(this.props.recipe.id);
            this.setState({ showLink: !this.state.showLink });
          }}
        >
          {this.props.recipe.title}
        </h2>
        <img src={this.props.recipe.image} alt="recipe image"></img>

        {this.state.showLink ? (
          <h2 className="recipeLink">
            <div className="instructions">
              {this.state.selectedInstructions}
            </div>
            <p className="sourceURL">
              Visit recipe
              <a href={this.state.sourceUrl}> HERE</a>
            </p>
          </h2>
        ) : null}
      </div>
    );
  }
}

export default RecipeEntry;
