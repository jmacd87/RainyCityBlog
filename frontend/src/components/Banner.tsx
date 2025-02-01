import * as React from 'react';
import logo from '../assets/SeattleBanner2.jpeg';
import './Banner.css';
import Loader from './Loader'; // Assuming you have a Loader component

interface IAppProps {}

const Banner: React.FunctionComponent<IAppProps> = () => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  // Preload the image
  React.useEffect(() => {
    const image = new Image();
    image.src = logo;

    image.onload = () => {
      console.log('Image has loaded');
      setIsImageLoaded(true); // Set the state to true once the image is loaded
    };

    image.onerror = () => {
      console.error('Image failed to load');
      setIsImageLoaded(true); // Stop the loader even if the image fails
    };
  }, []);

  // Rain Effect JavaScript
  React.useEffect(() => {
    if (!isImageLoaded) return; // Only apply the rain effect if the image is loaded

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
      rainInterval = window.setInterval(createRaindrop, 75); // create a raindrop every 100ms
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
      rainContainer.remove(); // Remove the rain container on cleanup
    };
  }, [isImageLoaded]); // Only run this effect when isImageLoaded changes

  return (
    <div className="banner-container">
      {!isImageLoaded ? (
        <div className="loader-overlay">
          <Loader /> {/* Show the loader while the image is loading */}
        </div>
      ) : (
        <div className="image-wrapper">
          <img src={logo} className="banner-image" alt="Blog logo" />
          <div className="overlay-text">
            <span style={{ color: 'var(--ocean-blue)' }}>Rainy</span>
            <span style={{ color: 'var(--evergreen-green)' }}> City </span>
          </div>
          <div>
            <span className="overlay-text2 glowing-title">Tech</span>
          </div>
          <div className="rain"></div>
        </div>
      )}
    </div>
  );
};

export default Banner;
