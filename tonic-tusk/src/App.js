import { Switch, Route } from "react-router";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
      </Switch>
    </div>
  );
}

export default App;