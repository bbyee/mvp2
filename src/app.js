import React from "react";
import Form from "../client/components/Form.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="logo">
          <img src="nompantrylogo.png" />
        </h1>
        <Form />
        <div>
          <p>
            Worried how much cooking at home costs?{" "}
            <span>
              Check out our sister app NOM Money{" "}
              <a
                className="promolink"
                href="http://ec2-3-17-167-188.us-east-2.compute.amazonaws.com"
              >
                HERE
              </a>
            </span>
          </p>
          <p>
            {" "}
            Need to eat cleaner?{" "}
            <span>
              Try managing your macros with our companion app NOM Fit
              <a
                className="promolink"
                href="https://shielded-coast-92839.herokuapp.com/"
              >
                {" "}
                HERE
              </a>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
