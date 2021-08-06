// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Category from './containers/pages/Category/category';
import Home from './containers/pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
         <Route path="/" exact component={Home}></Route>
            <Route path="/:category" component={Category}>
               
            </Route>
      </Switch>
    </div>
  );
}

export default App;
