import React from 'react';

// CV hosted on Google Drive
const CV = 'https://drive.google.com/uc?export=download&id=15ZgEB3QZSTEb2Y-3ajrTFi4qZjuocCIh';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
