import './App.css';
import Navbar from './components/Navbar'; 
import Home from './pages/Home.js';
import "./assets/fonts/Comfortaa-VariableFont_wght.ttf";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route render={() => <NotFound toggled={toggled} />} />*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;


/* TODO:
1. Add 404 page
2. Swipe animation between tabs
3. Navbar background and styling
4. About me styling
5. Art portfolio in projects?
*/