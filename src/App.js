
import "./App.css";
import { members } from "./pages/Members";
import Company from "./pages/Company";
import { Route, Switch } from "react-router-dom";
import Customer from "./pages/Customer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/customer/:id">
            <Customer members={members} />
          </Route>

          <Route exact path="/company/:id">
            <Company members={members} />
          </Route>

          <Route exact path="/">
            <Home members={members} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
