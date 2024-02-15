import './App.css';
import React from 'react';
import ClassComponentTask from './ClassComponentTask';
import FunctionalComponentTask from './FunctionalComponentTask';
// import GreetingFunctional from './GreetingFunctional'
// import GreetingClass from './GreetingClass'
function App() {
  return (
    <div>
      <ClassComponentTask />
      <FunctionalComponentTask />
      {/* <GreetingFunctional />
      <GreetingClass/> */}
    </div>
  );
};

export default App;