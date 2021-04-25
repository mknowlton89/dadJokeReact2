import './App.css';
import { HomeComponent } from './screens/Home/component';
import { FavoritesComponent } from './screens/Favorites/component';
import { Navbar } from './screens/Navbar/component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/favorites">
          <FavoritesComponent />
        </Route>
        <Route path="/">
          <HomeComponent />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
