import './App.css';
import Splash from "./components/Splash";
import Home from './pages/Home.js';
import "./assets/fonts/Comfortaa-VariableFont_wght.ttf";
import {HashRouter as Router, Route} from "react-router-dom";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Max's Website</title>
        <link rel="canonical" href="http://maxrodriguez.dev/" />
        <meta name="description" content="Max's Personal Site and Portfolio" />
      </Helmet>
      <Router>
        <Splash/>
        <Router>
          <Route exact path="/" component={Home} />
          {/* <Route render={() => <NotFound toggled={toggled} />} />*/}
        </Router>
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