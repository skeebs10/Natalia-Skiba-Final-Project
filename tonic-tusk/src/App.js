import { Switch, Route } from "react-router";
import About from "./compnents/About";
import Cart from "./compnents/Cart";
import Contact from "./compnents/Contact";
import Landing from "./compnents/Landing";
import Product from "./compnents/Product";
import Shop from "./compnents/Shop";

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
