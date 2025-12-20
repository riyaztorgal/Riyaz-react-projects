import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      apiData: {
        name: "Riyaz",
        location: "Gadag",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/namastedev");
    const json = await data.json();
    console.log(json);
    this.setState({ apiData: json });
  }

  render() {
    const { name, location, avatar_url } = this.state.apiData;
    const { count } = this.state;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>{name}</h2>

        <h3>Location : {location} </h3>
        <h3>Contact : {"75854646"} </h3>
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Class COunt
        </button>
      </div>
    );
  }
}

export default UserClass;
