import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './ContentCard.css';

type ContentCardProps = {
  id: number;
  title: string;
  author: string;
  summary: string;
  thumbnail: string;
};

const ContentCard: React.FC<ContentCardProps> = ({
  id,
  title,
  author,
  summary,
  thumbnail,
}) => {
  console.log('thumbnail', thumbnail);
  return (
    <Link to={`/story/${id}`} style={{ textDecoration: 'none' }}>
      <div className="card">
        <div className="card-image-container">
          <img src={thumbnail} alt={`Image ${id}`} className="image" />
        </div>
        <div className="description">
          <h3>{title}</h3>
          <p>{summary}</p>
          <p>By {author}</p>
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
