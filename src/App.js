// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import Home from './pages';
import Category from './pages/Category';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/:category" component={Category}/>
           </Switch>
    </div>
  );
}

export default App;
