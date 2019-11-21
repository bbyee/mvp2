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
      selectedInstructions: "",
      favoriteId: 0,
      favoriteTitle: ""
    };

    this.getRecipeInfo = this.getRecipeInfo.bind(this);
    this.saveFavorite = this.saveFavorite.bind(this);
  }

  getRecipeInfo(key = SPOON_API) {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${this.props.recipe.id}/information?includeInstruction=true&apiKey=${SPOON_API}`
      )
      .then(results => {
        this.setState({
          selectedId: results.data.id,
          selectedTitle: results.data.title,
          selectedImage: results.data.image,
          sourceUrl: results.data.sourceUrl,
          selectedInstructions: results.data.instructions
        });
      })
      .catch(err => {
        console.log("err getting recipe info", err);
      });
  }

  saveFavorite(favoriteId, favoriteTitle) {
    axios
      .post("/faves", {
        id: this.props.recipe.id,
        title: this.props.recipe.title
      })
      .then(() => {
        console.log("successfully saved fave to db");
        res.sendStatus(201);
      })
      .catch(err => {
        console.log("error saving fave to db");
        res.sendStatus(500);
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
            <div>{this.state.selectedInstructions}</div>
            <p>
              Visit recipe
              <a href={this.state.sourceUrl}> HERE</a>
            </p>
          </h2>
        ) : null}
        <button
          onClick={() => {
            this.saveFavorite(this.props.recipe.id, this.props.recipe.title);
            // this.setState({
            //   favoriteId: this.state.selectedId,
            //   favoriteTitle: this.state.selectedTitle
            // });
            console.log(
              "EHERHEHEHR",
              this.props.recipe.id,
              this.props.recipe.title
            );
            // this.saveFavorite(this.state.favoriteId, this.state.favoriteTitle);
          }}
        >
          Save as Favorite
        </button>
      </div>
    );
  }
}

export default RecipeEntry;
