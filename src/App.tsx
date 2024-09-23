// import { useState } from "react";
// import { produce } from "immer";
// import ExpandableText from "./components/ExpandableText/ExpandableText";
import ExpenseTracker from "./expense-tracker/components/ExpenseTracker";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import "./App.css";
// import Alert from "./components/Alert";
// import ReusableButtons from "./components/ReusableButtons";
// import Like from "./components/Like";
// import NavBar from "./components/NavBar/NavBar";
// import Cart from "./components/Cart/Cart";
export const categories = ["Grocery", "Utility", "Entertainment"] as const;

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);
  // const [iconFilled, setLikeIconFilled] = useState(false);
  // const cities = ["Agawam", "Springfield", "Longmeadow", "Holyoke"];
  // const [tags, setTags] = useState(["happy", "cheerful"]);
  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });
  // const [customer, setCustomer] = useState({
  //   name: "Jon",
  //   address: {
  //     city: "Agawam",
  //     zipCode: 0o1001,
  //   },
  // });

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "Jon",
  //   },
  // });

  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "But 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);

  // const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepperoni",
  //   toppings: ["Mushroom"],
  // });

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 1 },
  //   ],
  // });

  const handleClick = () => {
    //Change quantity of product 1 to 2
    // setCart({
    //   ...cart,
    //   items: cart.items.map((item) =>
    //     item.id === 1 ? { ...item, quantity: 2 } : item
    //   ),
    // });
    //Add new topping to array
    // setPizza({ ...pizza, toppings: [...pizza.toppings, "Green Pepper"] });
    // //Change name of player
    // setGame({ ...game, player: { ...game.player, name: "Jim" } });
    // //   game.map((game) =>
    // //     game.id === 1 ? { ...game, player: { name: "Jim" } } : game
    // //   )
    // // );
    // // const newDrink = {
    // //   //title: drink.title,
    // //   ...drink, // bring in all props of drink
    // //   price: 6,
    // // };
    // //Update object field
    // setDrink({ ...drink, price: 6 });
    // //Update object and pass new object in
    // setCustomer({
    //   ...customer,
    //   address: { ...customer.address, zipCode: 0o2460 },
    // });
    // //Add to array
    // setTags([...tags, "exciting"]);
    // //Remove from array
    // //Filter array to remove 'happy'
    // setTags(tags.filter((tag) => tag !== "happy"));
    // //Update Array
    // //Iterate thru array, return new tag for happy otherwise return tag
    // setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
    // //Update bug object, change fixed to true if right bug, otherwise return it
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // // Immer to simplify updating objects
    // setBugs(
    //   // draft = current state
    //   produce((draft) => {
    //     const bug = draft.find((bug) => bug.id === 1);
    //     if (bug) bug.fixed = true;
    //   })
    // );
  };

  // const fillIcon = (isFilled: boolean) => isFilled;
  const expenses = [
    {
      id: 1,
      description: "test",
      amount: 4,
      category: "Grocery",
    },
    {
      id: 2,
      description: "another Test",
      amount: 6,
      category: "Utility",
    },
  ];
  return (
    <>
      <ExpenseTracker></ExpenseTracker>
      <ExpenseList expenses={expenses}></ExpenseList>
      {/* <ListGroup
        items={cities}
        heading="My cities"
        onSelectItem={() => console.log("Selected")}
      />
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
        )}
      </div> */}
      {/* <ReusableButtons
        onClick={() => setAlertVisibility(true)}
        children={"My button"}
      ></ReusableButtons> */}
      {/* <Like onClick={() => {}} isLiked={false} /> */}
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      {drink.price}
      <button onClick={handleClick}>Click Me</button> */}
      {/* <NavBar cartItemsCount={cartItems.length} /> */}
      {/* Empty cart on clear */}
      {/* <Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}
      {/* <div>
        Cart:{" "}
        {cart.items.map((item) => (
          <p key={item.id}>
            {item.title} {item.quantity}
          </p>
        ))}
      </div>
      <button onClick={handleClick}>Change Quantity</button> */}
      {/* <ExpandableText>Hello World</ExpandableText> */}
    </>
  );
}

export default App;
