//nomal JS

const headding = document.createElement("h1");
headding.innerHTML = "welcome to Riyaz react native in JS";

const root = document.getElementById("root");
root.appendChild(headding);

// React JS

const headding1 = React.createElement(
  "h2",
  { id: "abc" },
  "Hello world code in react"
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(headding1);

// nested components in React

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi this is inner child of Div parent"),
    React.createElement("h2", {}, "this is sibling of child H1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi this is inner child2  of Div parent"),
    React.createElement("h2", {}, "this is sibling of child2 H1"),
  ]),
]);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parent);
