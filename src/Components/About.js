import React from "react";
import UserFunc from "./UserFunc";
import UserClass from "./UserClass";
import UserContextData from "../utils/UserContexData";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <UserContextData.Consumer>
          {(data) => <h2 className="font-bold">{data.loggedInUser}</h2>}
        </UserContextData.Consumer>
        <h2>Welcome to Riyaz's React Practice website and this is about us</h2>

        <UserFunc />

        <UserClass />
      </div>
    );
  }
}

export default About;
