import React from 'react';
import './App.css';
import PageHeader from '../PageHeader/PageHeader.js';
import Footer from '../Footer/Footer.js';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className='App-content'>
        <PageHeader />
        <Outlet />
	    </div>
      <Footer />
    </div>
  );
}

export default App;
