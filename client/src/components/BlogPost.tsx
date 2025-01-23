import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './BlogPost.css';

type BlogPostProps = {
  id: number;
  mainTitle: string;
  title: string;
  author: string;
  summary: string;
  imageUrl: string;
};

const BlogPost: React.FC<BlogPostProps> = ({
  id,
  mainTitle,
  title,
  author,
  summary,
  imageUrl,
}) => {
  return (
    <Link
      to={`/story/${id}`}
      className="container"
      style={{ textDecoration: 'none' }}
    >
      <div className="top-border"></div>
      <div className="title-box">
        <h2 className="main-title">{mainTitle}</h2>
      </div>
      <div className="main-content">
        <div className="image-container">
          <img src={imageUrl} alt={title} className="image" />
        </div>
        <div className="text-container">
          <h1 className="title">{title}</h1>
          <p className="author">by {author}</p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
