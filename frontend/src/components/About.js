import React from 'react';
import aboutImage from '../images/about.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>APOTEK DHARMI FARMA</h2>
          <p>Menyediakan obat-obatan berkualitas tinggi dengan harga yang terjangkau. 
            Memberikan pelayanan yang ramah, cepat, dan profesional. Menyediakan informasi kesehatan yang 
            akurat dan terpercaya untuk membantu Anda membuat keputusan yang tepat terkait kesehatan Anda.</p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Apotek Darmi Farma" />
        </div>
      </div>
    </section>
  );
};

export default About;
