import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Controller from './comps/Controller';
import Home from './comps/Homepage/Home';
import Title from './comps/Title';
import EditForm from './comps/EditForm';
import { projectFirestore } from './firebase/config';



function App() {

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
      <Title />
        <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route exact path ="/inventory">
            <Controller/>
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
