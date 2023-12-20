import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loginpage from "./Components/login";
import Signpage from "./Components/sign";
import Dashboard from "./Components/Dashboard";
import SummaryPage from "./Components/SummaryPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/signup">
              <Signpage />
            </Route>
            <Route exact path="/summary">
              <SummaryPage />
            </Route>
            <Route exact path="/">
              <Loginpage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
