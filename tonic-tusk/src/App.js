import { Switch, Route } from "react-router";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Product from "./components/Product";
import Shop from "./components/Shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/product/:id" component={Product}></Route>
        <Route path="/cart/:Cid" component={Cart}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
}

export default App;
