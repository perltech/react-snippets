import React from 'react';

import Nav from '../src/components/Navbar/Nav';
import Main from '../src/components/Main/Main';
import Footer from '../src/components/Footer/Footer';

import './helpers/flexbox.min.css';
import './App.css'

const App = () => {
  return (
    <div className="main">
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
