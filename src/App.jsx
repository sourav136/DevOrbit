import React from 'react';
import LoginPage from './pages/LoginPage';
import NavBar from './components/nav/NavBar';



const App = () => {
  return (
    <div className='app-container'>
      <div className='container'>
        <div className='row'> 
          <NavBar/>
        </div> 
      </div>
    </div>
  );
};

export default App;