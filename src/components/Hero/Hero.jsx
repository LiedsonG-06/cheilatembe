import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ReactTyped } from 'react-typed'; 
import './Hero.css';

const Hero = () => {
  return (
    <div id='home' className="hero">
      <hr /><hr />
      <p>Bem vinda ao Portfólio da Cheila Tembe</p>

      <h1>
        Eu sou <span className="highlight">Cheila Tembe</span>
      </h1>

      <ReactTyped
        className="typed-text"
        strings={['Gestora de Marketing', 'Flexível adaptação ao ambiente de trabalho', 'Criadora de Soluções']}
        typeSpeed={50}
        backSpeed={30}
        loop
      />

      <div className='hero-action'>
        <AnchorLink className='anchor-link' offset={50} href='#contacto'>
          <div className='hero-connect'>Fale Comigo</div>
        </AnchorLink>

        <AnchorLink className='anchor-link' offset={50} href='#sobre'>
          <div className='hero-resume'>Sobre mim</div>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Hero;
