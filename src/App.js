import Cards from './components/Cards';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Cards} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
