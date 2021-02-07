/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { analytics } from './config';

function App() {
  return (
    <div className="App">
      <p>Test App Preview</p>
      {analytics.logEvent('Visited Homepage')}
    </div>
  );
}

export default App;
