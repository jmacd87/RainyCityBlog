import React, { useEffect, useState } from 'react';
import '../App.css';
import './StoryPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../contexts/PostsContext';
import ShareStory from '../components/ShareStory';
import SimilarStories from '../components/SimilarStories';
import Loader from '../components/Loader';
import MessageScreen from '../components/MessageScreen';

interface StoryTextSection {
  title?: string;
  quote?: string;
  content?: string;
}

const StoryPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { posts: contextPosts } = usePosts();
  const [posts, setPosts] = useState<any[]>(contextPosts || []);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageLoading, setImageLoading] = useState<boolean>(true); // Image loading state

  useEffect(() => {
    const storedPosts = sessionStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
      setLoading(false);
    } else if (contextPosts.length > 0) {
      setPosts(contextPosts);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [contextPosts]);

  const story = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    console.log('Story Text Structure:', story?.storyText);
  }, [story]);

  if (!id || loading) {
    return <Loader />;
  }

  if (!story) return <MessageScreen message={'Story not found'} />;

  const renderStorySection = (section: StoryTextSection, index: number) => (
    <div key={index} className="story-section">
      {section.title && (
        <h3 className="story-section-title">{section.title}</h3>
      )}
      {section.content && <p className="story-paragraph">{section.content}</p>}
      {section.quote && (
        <blockquote className="story-quote">{section.quote}</blockquote>
      )}
    </div>
  );

  return (
    <>
      <div className="story-layout-container">
        <div className="story-container">
          <div className="story-author-date">
            <div>
              <h2 className="story-main-title">{story.author}</h2>
              <span className="story-date">
                {new Date(story.date).toLocaleDateString()}
              </span>
            </div>
            <button className="back-button" onClick={() => navigate('/')}>
              Back
            </button>
          </div>

          <h1 className="story-title">{story.title}</h1>
          <div className="story-image-container">
            {imageLoading && (
              <div className="image-loader">
                <Loader />
              </div>
            )}
            <img
              src={story.imageUrl}
              alt={story.title}
              className={`story-image ${imageLoading ? 'hidden' : ''}`}
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)} // Ensure loader hides if image fails
            />
          </div>
          <div style={{ marginLeft: '5%' }}>
            <ShareStory story={story} />
          </div>
          <div className="story-text-wrapper">
            <div className="story-text-container">
              {story.storyText.map((section: StoryTextSection, index: number) =>
                renderStorySection(section, index)
              )}
            </div>
          </div>
        </div>
        <div className="similar-stories-page-container">
          <SimilarStories currentStoryId={id} />
        </div>
      </div>
    </>
  );
};

export default StoryPage;
