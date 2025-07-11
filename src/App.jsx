import React from 'react';
import LoginPage from './pages/LoginPage';
import NavBar from './components/nav/NavBar';
import MainHead from './components/mainHead/MainHead';



const App = () => {
  return (
    <div className='app-container'>
      <div className='container'>
        <div className='row'> 
          <NavBar/>
          <div className="col-9">
            <MainHead/>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default App;