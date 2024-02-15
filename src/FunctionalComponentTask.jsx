import React, { useState } from 'react';

const FunctionalComponentTask = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className='container1'>
      <h2>Functional Component Task</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default FunctionalComponentTask;


