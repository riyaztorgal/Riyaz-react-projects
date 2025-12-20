import React from "react";
import UserFunc from "./UserFunc";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <h2>
          {" "}
          Welcome to Riyaz's React Practice website and this is about us{" "}
        </h2>

        <UserFunc />

        <UserClass />
      </div>
    );
  }
}

export default About;
