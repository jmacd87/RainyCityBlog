import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import ContentCard from '../components/ContentCard';
import Title from '../components/Title';
import BlogPost from '../components/BlogPost';
import api from '../services/api';
import { usePosts } from '../contexts/PostsContext';
import '../App.css';

const HomePage: React.FC = () => {
  const { posts, setPosts } = usePosts();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // For error handling

  useEffect(() => {
    // Check if posts are already loaded in localStorage
    const storedPosts = sessionStorage.getItem('posts');
    if (storedPosts) {
      // If posts are in localStorage, use them
      setPosts(JSON.parse(storedPosts));
      setIsLoading(false);
    } else {
      // If posts aren't in localStorage, fetch them from API
      api
        .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/posts`)
        .then((response) => {
          setPosts(response.data);
          // Store fetched posts in localStorage
          localStorage.setItem('posts', JSON.stringify(response.data));
        })
        .catch((err) => {
          console.error(err);
          setError('Error loading posts. Please try again later.');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [setPosts]);

  if (isLoading) {
    return <div style={{ minHeight: 800 }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ minHeight: 800 }}>{error}</div>;
  }

  return (
    <>
      <Banner />
      <Title text="Trending" />
      <div className="outer-card-container">
        <div className="card-container">
          {posts
            .slice(0, 3)
            .map(
              (story) => (
                console.log('story', story),
                (
                  <ContentCard
                    key={story.id}
                    id={story.id}
                    author={story.author}
                    title={story.title}
                    summary={story.summary}
                    imageUrl={story.imageUrl}
                  />
                )
              )
            )}
        </div>
      </div>
      <Title text="Latest" />
      {posts.length > 3 && (
        <BlogPost
          id={posts[3].id}
          mainTitle={posts[3].title}
          title={posts[3].title}
          author={posts[3].author}
          summary={posts[3].summary}
          imageUrl={posts[3].imageUrl}
        />
      )}
    </>
  );
};

export default HomePage;
