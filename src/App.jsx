import { createRoot } from "react-dom";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1> Padre Gino's Pizzeria</h1>
      <Pizza
        name="pepperoni"
        description="tasty pizza"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="american"
        description="with fries"
        image={"/public/pizzas/big_meat.webp"}
      />
      <Pizza
        name="hawaiian"
        description="with pineapples"
        image={"/public/pizzas/hawaiian.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
