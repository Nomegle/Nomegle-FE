/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {Route} from 'react-router-dom';
import { analytics } from './config';

import Homepage from './pages/home'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      {analytics.logEvent('Visited Homepage')}
    </div>
  );
}

export default App;
