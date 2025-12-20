import { useEffect, useState } from "react";
const UserFunc = () => {
  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch("https://api.github.com/users/Bharat2044");
    const json = await data.json();

    setApiData(json);
  };
  return (
    <div className="user-card">
      <img src={apiData.avatar_url}></img>
      <h2>{apiData.name} From Functional Comp</h2>
      <h3>Location : {apiData.location} </h3>
      <h3>Contact : {"23456789"} </h3>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Functional Count
      </button>
    </div>
  );
};

export default UserFunc;
