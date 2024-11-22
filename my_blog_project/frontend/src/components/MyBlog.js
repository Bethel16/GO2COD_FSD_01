import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyBlog = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/user-posts/', { withCredentials: true });
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching user posts:", error);
            }
        };
        fetchUserPosts();
    }, []);

    // Get CSRF token
    const getCSRFToken = () => {
        const cookieValue = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)')?.pop() || '';
        return cookieValue;
    };

    const handleDelete = async (postId) => {
        try {
            await axios.delete(`http://localhost:8000/api/posts/${postId}/`, {
                withCredentials: true,
                headers: {
                    'X-CSRFToken': getCSRFToken(),
                }
            });
            setPosts(posts.filter(post => post.id !== postId)); // Update UI
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    const handleEdit = (postId) => {
        navigate(`/edit-post/${postId}`);
    };

    return (
        <div className="container">
            <h1>My Blog Posts</h1>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <button onClick={() => handleEdit(post.id)} className="btn btn-primary me-2">Edit</button>
                            <button onClick={() => handleDelete(post.id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
};

export default MyBlog;
