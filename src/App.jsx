import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'routes/Home';
import { NotFound } from 'routes/Error';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Image-Search" exact component={Home} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Router>
  )
}

export default App;
