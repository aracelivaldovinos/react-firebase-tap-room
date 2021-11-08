import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { projectFirestore } from './firebase/config';
import { useState } from 'react';

import Navbar from './comps/Navbar';
import Controller from './comps/Controller';
import Home from './comps/Homepage/Home';
import EditForm from './comps/EditForm';
import Login from './comps/Login';

function App() {

  const [logout, setLogout] = useState(false);
  const [login, setLogin] = useState(true);

  const onClickingEdit = (beer, id) =>{
    projectFirestore.collection('Beers').doc(id).update({
      name: beer.name,
      description: beer.description,
      tagline: beer.tagline,
      // image_url: beer.image_url,
      keg: beer.keg
    })

  }
  return (
    <Router>
      <div className="App">
        <Navbar logout={logout} login={login}/>
          <Switch>
            <Route exact path ="/">
              <Home/>
            </Route>
            <Route path ="/login">
              <Login setLogin={setLogin} setLogout={setLogout}/>
            </Route>
            <Route path ="/inventory">
              <Controller />
            </Route>
            <Route path="/edit/:id">
              <EditForm handleSubmitForm={onClickingEdit}/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
