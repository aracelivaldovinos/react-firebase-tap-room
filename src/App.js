import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Controller from './comps/Controller';
import Title from './comps/Title';
import AddForm from './comps/AddForm';
import EditForm from './comps/EditForm';



function App() {
  return (
    <Router>
      <div className="App">
      <Title />
        <Switch>
          <Route exact path ="/">
            <Controller/>
          </Route>
          <Route path="/create">
            <AddForm/>
          </Route>
          <Route path="/edit/:id">
            <EditForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
