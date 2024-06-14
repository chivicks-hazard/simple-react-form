import React from 'react';
import './index.css';
import forestImage from './assets/forest.jpeg';

const App = () => {
  return (
    <form action="" className="glass">
      <h2>Login Form</h2>
      <div className="formfield">
        <label htmlFor="name">Name</label>
        <input type="text" />
      </div>
      <div className="formfield">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="" />
      </div>
      <input type="submit" value="Submit" className='submit' />
    </form>
  );
}

export default App;
