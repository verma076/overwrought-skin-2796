import React from 'react';
import logo from './logo.svg';
import './App.css';

import { SignUpPage } from './Pages/SignUpPage';
import { Login } from './Pages/LoginPage';

import HomePage from './Pages/Homepage';

import { AdminDashboard } from './Pages/AdminDashboard';

import AllRoutes from './Pages/AllRoutes';



function App() {
  return (
    <div className="App">
 
      {/* <SignUpPage/> */}
      {/* <Login/> */}
<AllRoutes/>
      

   
      {/* <AdminDashboard/> */}

      {/*<HomePage/>*/}


    </div>
  );
}

export default App;
