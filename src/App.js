import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Widget1 from './pages/widget1';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path = '/'>
        <Home />
      </Route>

      <Route exact path = "/widget1">
          <Widget1 />
      </Route>
    </div>

  );
}

export default App;
