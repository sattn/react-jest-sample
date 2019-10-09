import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sample from './screen/sample'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/sample" component={Sample} exact />
          <Sample />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
