import React from 'react';
import './App.css';
import ProviderTasks from './Context/ProviderTasks';
import Home from './Pages/Home';

function App() {
  return (
    
    <div>
      <ProviderTasks>
           <Home />
      </ProviderTasks>
    </div>
  );
}

export default App;
