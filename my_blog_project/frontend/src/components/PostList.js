import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost'; // Ensure this import is correct

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <BlogPost key={post.id} post={post} /> // Rendering BlogPost here
        ))}
      </ul>
    </div>
  );
};

export default PostList;
