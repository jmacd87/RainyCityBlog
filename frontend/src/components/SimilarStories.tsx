import React from 'react';
import { usePosts } from '../contexts/PostsContext';
import { useNavigate } from 'react-router-dom';
import './SimilarStories.css';

const SimilarStories: React.FC<{ currentStoryId: string }> = ({
  currentStoryId,
}) => {
  const { posts } = usePosts();
  const navigate = useNavigate();

  // Filter out the current story to avoid showing it in the similar stories section
  const similarPosts = posts.filter(
    (post) => post.id.toString() !== currentStoryId
  );

  return (
    <div className="similar-stories-container">
      <h3 className="similar-stories-title">Similar Stories</h3>
      <br />
      <div className="similar-stories-list">
        {similarPosts.map((post) => (
          <div
            key={post.id}
            className="similar-story-item"
            onClick={() => navigate(`/story/${post.id}`)}
          >
            <div className="thumbnail">
              <img src={post.imageUrl} alt={post.title} />
            </div>
            <div className="similar-story-title">{post.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarStories;
