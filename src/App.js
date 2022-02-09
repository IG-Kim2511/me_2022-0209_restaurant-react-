
import React from 'react';

import {AboutUs} from './container'

// 폴더내의 index.js를 통해서 export, import
import {Navbar} from './components'



import './App.css';

function App() {
  return (   

    <div>
      {/*🍀   */} 

      
      <Navbar/>
      
      <AboutUs/>
      
      {/* 
        <Navbar />
        <Header />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      */}

      <h1>test</h1>
  </div>



  );
}

export default App;
