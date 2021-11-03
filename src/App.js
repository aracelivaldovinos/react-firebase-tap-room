import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Controller from './comps/Controller';
import Title from './comps/Title';
import AddForm from './comps/AddForm';
import EditForm from './comps/EditForm';
import { projectFirestore } from './firebase/config';



function App() {
  const onClickingAdd = (beer) =>{
    console.log(beer)
    projectFirestore.collection('Beers').add({
      name: beer.name,
      description: beer.description,
      tagline: beer.tagline,
      // image_url: beer.image_url,
      keg: beer.keg
  
    });
  };

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
            <Controller/>
          </Route>
          <Route path="/create">
            <AddForm handleSubmitForm={onClickingAdd}/>
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
