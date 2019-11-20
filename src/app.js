import React from "react";
import Form from "../client/components/Form.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    //bind methods here:
  }

  render() {
    return (
      <div>
        <h1>NOM Pantry</h1>
        <Form />
        <div>
          Not sure how much cooking at home costs? Checkout our sister app NOM
        </div>
      </div>
    );
  }
}

export default App;
