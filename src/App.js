import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './comps/Navbar/Navbar';
import Controller from './comps/Inventory/Controller';
import Home from './comps/Homepage/Home';
import Login from './comps/Navbar/Login';

function App() {

  const [logout, setLogout] = useState(false);
  const [login, setLogin] = useState(true);
  const [home, setHome] = useState(false);
  
  return (
    <Router>
      <div className="App">
        <Navbar 
          logout={logout} 
          login={login}
          home={home} 
          setLogin={setLogin} 
          setLogout={setLogout}
          setHome={setHome}
          />
        <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route path ="/login">
            <Login setLogin={setLogin} setLogout={setLogout} setHome={setHome}/>
          </Route>
          <Route path ="/inventory">
            <Controller />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
