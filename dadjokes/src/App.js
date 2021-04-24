import './App.css';
import { HomeComponent } from './screens/Home/component';
import { FavoritesComponent } from './screens/Favorites/component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="top-nav">
          <Link to="/">
            <h3 >Dad Joke Generator</h3>
          </Link>
          <Link to="/favorites">
            <h3>Favorites</h3>
          </Link>
        </div>
        <Switch>
          <Route path="/favorites">
            <FavoritesComponent />
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
