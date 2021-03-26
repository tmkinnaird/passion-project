import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';


import Home from './Components/Home/Home'
import About from './Components/About/About'
import Plants from './Components/Plants/Plants'

function App() {
  return (
    <div className="App">
    <Router>
    <nav>
        <Link to='/'>
          <h1>Green Thumb Home Page</h1>
        </Link>
        <Link to='/about'>About</Link><br/>
        <Link to='/plants'>When To Plant</Link>
      </nav>
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
