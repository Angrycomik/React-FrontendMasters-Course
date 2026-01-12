import React from "react";
import { createRoot } from "react-dom";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Fish pizza",
      description: "Tuna flavoured",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian pizza",
      description: "Pineapple flavoured",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni pizza",
      description: "speaks for itself",
    }),
    React.createElement(Pizza, {
      name: "American Pizza",
      description: "French fries and hot dogs",
    })
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
