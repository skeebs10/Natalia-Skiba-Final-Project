import { Switch, Route, Router } from "react-router";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import GuestPayment from "./components/GuestPayment";
import Landing from "./components/Landing";
import Product from "./components/Product";
import Shop from "./components/Shop";
import Confirmation from "./components/OrderConfirmation";
import SearchResults from "./components/SearchResults";
import News from "./components/News";

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
        <Route
          path="/guestpayment/:Cid/:price"
          component={GuestPayment}
        ></Route>
        <Route path="/confirmation" component={Confirmation}></Route>
        <Route path="/searchproduct" component={SearchResults}></Route>
        <Route path="/news" component={News}></Route>
      </Switch>
    </div>
  );
}

export default App;
