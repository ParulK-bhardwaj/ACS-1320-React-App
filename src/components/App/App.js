import React from 'react';
import './App.css';
import PageHeader from '../PageHeader/PageHeader.js';
import Footer from '../Footer/Footer.js';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <main className="App">
      <div className='App-content'>
        <PageHeader />
        <Outlet />
	    </div>
      <Footer />
    </main>
  );
}

export default App;
