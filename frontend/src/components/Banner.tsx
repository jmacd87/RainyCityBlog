import React, { useState, useEffect } from 'react';
import logo from '../assets/SeattleBanner2.jpeg';
import './Banner.css';
import Loader from './Loader';

interface IAppProps {}

const Banner: React.FunctionComponent<IAppProps> = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Rain Effect JavaScript
    const banner = document.querySelector('.image-wrapper');
    const rainContainer = document.createElement('div');
    rainContainer.classList.add('rain');
    banner?.appendChild(rainContainer);

    const createRaindrop = () => {
      const raindrop = document.createElement('div');
      raindrop.classList.add('raindrop');
      raindrop.style.left = `${Math.random() * 100}%`; // position randomly
      rainContainer.appendChild(raindrop);

      setTimeout(() => {
        raindrop.remove();
      }, 500); // match with animation duration
    };

    let rainInterval: number;

    const handleMouseOver = () => {
      rainInterval = window.setInterval(createRaindrop, 100); // create a raindrop every 100ms
    };

    const handleMouseOut = () => {
      window.clearInterval(rainInterval);
    };

    banner?.addEventListener('mouseover', handleMouseOver);
    banner?.addEventListener('mouseout', handleMouseOut);

    // Cleanup event listeners
    return () => {
      banner?.removeEventListener('mouseover', handleMouseOver);
      banner?.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="banner-container">
      <div className="image-wrapper">
        {!imageLoaded && (
          <div className="loader-overlay">
            <Loader />
          </div>
        )}
        <img
          src={logo}
          className="banner-image"
          alt="Blog logo"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="overlay-text">
          <span style={{ color: 'var(--ocean-blue)' }}>Rainy</span>
          <span style={{ color: 'var(--evergreen-green)' }}> City </span>
        </div>
        <div>
          <span className="overlay-text2 glowing-title">Tech</span>
        </div>
        <div className="rain"></div>
      </div>
    </div>
  );
};

export default Banner;
