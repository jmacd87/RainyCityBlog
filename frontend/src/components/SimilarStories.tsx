import React from 'react';
import { usePosts } from '../contexts/PostsContext';
import { useNavigate } from 'react-router-dom';
import './SimilarStories.css';
import { Post } from '../types/Post';
const SimilarStories: React.FC<{ currentStoryId: string }> = ({
  currentStoryId,
}) => {
  const { posts: contextPosts } = usePosts();
  const navigate = useNavigate();

  const storedPosts = sessionStorage.getItem('posts');
  const parsedStoredPosts = storedPosts ? JSON.parse(storedPosts) : null;

  const posts = parsedStoredPosts || contextPosts;

  const similarPosts = posts.filter(
    (post: { id: number }) => post.id.toString() !== currentStoryId
  );

  return (
    <div className="similar-stories-container">
      <h3 className="similar-stories-title">Similar Stories</h3>
      <br />
      <div className="similar-stories-list">
        {similarPosts.map((post: Post) => (
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
