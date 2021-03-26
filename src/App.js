import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';


import Home from './Components/Home/Home'
import About from './Components/About/About'
import Plants from './Components/Plants/Plants'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/plants' component={Plants} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
