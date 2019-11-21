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
        <h1 className="companyname">NOM Pantry</h1>
        <Form />
        <div>
          <p>
            Worried how much cooking at home costs?{" "}
            <span>Check out our sister app NOM Money HERE</span>
          </p>
          <p>
            {" "}
            Need to eat cleaner?{" "}
            <span>
              Try managing your macros with our companion app NOM Fit HERE
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
