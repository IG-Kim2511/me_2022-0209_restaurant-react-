
import React from 'react';

import {AboutUs, Chef, Header, SpecialMenu} from './container'

// 폴더내의 index.js를 통해서 export, import
import {Navbar} from './components'



import './App.css';

function App() {
  return (   

    <div>
      {/*🍀   */} 

      <Navbar/>      
      <Header />
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      
      {/* 
          <Navbar />
          <Header />
          <AboutUs />
          <SpecialMenu />
          <Chef />
          <Intro />
          <Laurels />
          <Gallery />
          <FindUs />
          <Footer />
      */}

  </div>



  );
}

export default App;
