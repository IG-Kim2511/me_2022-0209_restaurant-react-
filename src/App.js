
import React from 'react';

import {AboutUs, Awards, Chef, FindUs, Gallery, Header, Intro, SpecialMenu} from './container'

// 폴더내의 index.js를 통해서 export, import
import {Navbar} from './components'



import './App.css';

function App() {
  return (   

    <div>
      {/*🍀  test */}      
      <h1 className="" style={{ background: 'yellow'}}>test</h1>

      {/* containers */}
      <Navbar/>      
      <Header />
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Awards/> {/* 강의에서의 원래 이름 : Laurels */} 
      <Gallery/>
      <FindUs/>


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
