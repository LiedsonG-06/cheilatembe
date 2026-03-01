import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Sobremim from './components/Sobremim/Sobremim'

import Mywork from './components/Mywork/mywork'
import Contacto from './components/Contacto/contacto'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sobremim />
     
      <Mywork />
      <Contacto/> 
      <Footer/>
    </div>
  );
}

export default App;
