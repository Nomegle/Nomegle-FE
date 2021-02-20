import React from 'react';
import { analytics } from './config';
import { Route } from 'react-router-dom';
import Homepage from './pages/homepage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      {analytics.logEvent('Visited Homepage')}
    </div>
  );
}

export default App;
