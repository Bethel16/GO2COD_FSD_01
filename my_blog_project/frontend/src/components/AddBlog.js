import React, { useState } from "react";
import axios from "axios";

// Helper function to get CSRF token from cookies
const getCSRFToken = () => {
    const csrfCookie = document.cookie
        .split("; ")
        .find(row => row.startsWith("csrftoken="));
    return csrfCookie ? csrfCookie.split("=")[1] : null;
};

const AddPost = ({ onPostAdded }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            title,
            body,
        };
    
        try {
            const response = await axios.post("http://localhost:8000/api/posts/", formData, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCSRFToken(),
                },
                withCredentials: true,
            });
            console.log("Post added successfully:", response.data);
            onPostAdded();
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Create New Post</h2>
            <form onSubmit={handleSubmit} className="add-post-form">
                <div className="form-group">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Content</label>
                    <textarea
                        className="form-textarea"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        rows="5"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Add Post</button>
            </form>
        </div>
    );
};

export default AddPost;
