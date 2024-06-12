import React from 'react';
import homeImage from '../images/aooku.jpg';

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>APOTIK DHARMI FARMA</h1>
          <h3>Bersama Kami,Sehat Itu Mudah</h3>
          <button className="cta-button" onClick={scrollToAbout}>Let's Try</button>
        </div>
        <div className="home-image">
          <img src={homeImage} alt="Pharmacy" />
        </div>
      </div>
    </section>
  );
};

export default Home;
