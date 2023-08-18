import './App.css';
import Splash from "./components/Splash";
import Home from './pages/Home.js';
import "./assets/fonts/Comfortaa-VariableFont_wght.ttf";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Splash/>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route render={() => <NotFound toggled={toggled} />} />*/}
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;


/* TODO:
2. Navbar background and styling
3. About me styling
6. Scale for mobile devices

Stretch goals:
1. Projects expand from bottom of screen instead of modals
2. Sticky navbar
3. Dark theme
4. Figure out why page disappears only on switching from right to left page (see WARNING)
5. Add 404 page
*/