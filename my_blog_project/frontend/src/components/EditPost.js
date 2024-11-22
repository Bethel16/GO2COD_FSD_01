import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({ title: '', body: '' });
    const navigate = useNavigate();

    // Fetch the post data when the component mounts
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/posts/${postId}/`, 
                    { withCredentials: true }  // Ensure cookies are sent with the request
                );
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [postId]);

    // Update state as user edits title or body
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const getCSRFToken = () => {
        const csrfToken = document.cookie.match(/csrftoken=([^;]+)/);
        return csrfToken ? csrfToken[1] : null; // Extract CSRF token from the cookie
    };

    const handleSave = async () => {
        const csrfToken = getCSRFToken();

        if (!csrfToken) {
            console.error('CSRF token not found');
            return;
        }

        try {
            // Make PUT request to update the post
            const response = await axios.put(
                `http://localhost:8000/api/posts/${postId}/`, 
                post,
                {
                    withCredentials: true,
                    headers: {
                        'X-CSRFToken': csrfToken, // Send the CSRF token in the header
                    },
                }
            );
            console.log('Post updated successfully:', response.data);
            navigate('/my-posts'); // Redirect to the list of posts after saving
        } catch (error) {
            console.error('Error updating post:', error.response?.data || error.message);
        }
    };

    return (
        <div className="container">
            <h2>Edit Post</h2>
            <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}
                className="form-control mb-2"
                placeholder="Title"
            />
            <textarea
                name="body"
                value={post.body}
                onChange={handleChange}
                className="form-control mb-2"
                placeholder="Body"
            ></textarea>
            <button onClick={handleSave} className="btn btn-success">Save Changes</button>
        </div>
    );
};

export default EditPost;
