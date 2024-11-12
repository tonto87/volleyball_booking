import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    padding: '0',
  };

  const mainStyle = {
    padding: '20px',
  };

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/"  />
    //     <Route path="/"  />
    //   </Routes>
    // </Router>
    <div style={appStyle}>
    <Header />
    <Home />
    <main style={mainStyle}>
      {/* <h1>Welcome to the Main Page!</h1> */}
    </main>
  </div>

  );
}

export default App;

