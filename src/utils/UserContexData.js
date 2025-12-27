import { createContext } from "react";

const UserContextData = createContext({
  loggedInUser: "Testing User",
});

export default UserContextData;
