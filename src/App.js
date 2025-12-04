import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
