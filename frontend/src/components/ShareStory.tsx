import React from 'react';
import './ShareStory.css';
interface ShareButtonProps {
  story: {
    title: string;
    author: string;
    date: string;
    imageUrl: string;
    storyText: any[];
  };
}

const ShareButton: React.FC<ShareButtonProps> = ({ story }) => {
  const handleShare = (platform: string) => {
    const shareData = {
      title: story.title,
      text: `Check out this story by ${story.author}`,
      url: window.location.href,
    };

    const fallbackShare = (url: string) => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    // Use native share if available
    if (navigator.share) {
      navigator
        .share(shareData)
        .catch((error) => console.log('Error sharing', error));
      return;
    }

    // Check if the user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    switch (platform) {
      case 'Facebook':
        if (isMobile) {
          fallbackShare(
            `fb://facewebmodal/f?href=${encodeURIComponent(
              window.location.href
            )}`
          ); // Opens Facebook app on mobile
        } else {
          fallbackShare(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              window.location.href
            )}`
          );
        }
        break;

      case 'Twitter':
        if (isMobile) {
          fallbackShare(
            `twitter://post?message=${encodeURIComponent(
              `Check out this story by ${story.author} ${window.location.href}`
            )}`
          ); // Opens Twitter app
        } else {
          fallbackShare(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              window.location.href
            )}&text=${encodeURIComponent(
              `Check out this story by ${story.author}`
            )}`
          );
        }
        break;

      case 'Email':
        fallbackShare(
          `mailto:?subject=${encodeURIComponent(
            story.title
          )}&body=${encodeURIComponent(
            `Check out this story by ${story.author}: ${window.location.href}`
          )}`
        );
        break;

      case 'Link':
        navigator.clipboard
          .writeText(window.location.href)
          .then(() => alert('Link copied to clipboard'))
          .catch((err) => console.log('Error copying link', err));
        break;

      default:
        console.log(`${platform} sharing not supported in this browser.`);
    }
  };

  return (
    <div className="share-buttons">
      <span className="share-text">Share:</span>
      <div
        className="share-icon facebook"
        onClick={() => handleShare('Facebook')}
      >
        <i className="fab fa-facebook-f"></i>
      </div>
      <div
        className="share-icon twitter"
        onClick={() => handleShare('Twitter')}
      >
        <i className="fab fa-twitter"></i>
      </div>
      <div className="share-icon email" onClick={() => handleShare('Email')}>
        <i className="fas fa-envelope"></i>
      </div>
      <div className="share-icon copy" onClick={() => handleShare('Link')}>
        <i className="fas fa-link"></i>
      </div>
    </div>
  );
};

export default ShareButton;
