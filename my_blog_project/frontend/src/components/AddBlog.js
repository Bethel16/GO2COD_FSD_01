import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await axios.post('http://localhost:8000/api/blogs/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccessMessage('Blog added successfully!');
            setErrorMessage('');
            setTitle('');
            setContent('');
            setImage(null);
            console.log('Blog added:', response.data);
        } catch (error) {
            console.error('Error adding blog:', error);
            setErrorMessage('Failed to add blog. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
       
            <div
                className="card p-5 shadow-lg border-0"
                style={{
                    maxWidth: '600px',
                    width: '100%',
                    borderRadius: '20px',
                    background: 'rgba(0, 0, 0, 1)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
            >
                {errorMessage && (
                    <div className="alert alert-danger rounded-pill text-center" style={{ fontSize: '14px' }}>
                        {errorMessage}
                    </div>
                )}
                {successMessage && (
                    <div className="alert alert-success rounded-pill text-center" style={{ fontSize: '14px' }}>
                        {successMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="form-control rounded-pill"
                            placeholder="Blog Title"
                            style={{
                                padding: '10px 15px',
                                borderColor: '#4a90e2',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            className="form-control rounded"
                            placeholder="Blog Content"
                            rows="6"
                            style={{
                                padding: '15px',
                                borderColor: '#4a90e2',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="imageUpload"
                            style={{
                                display: 'block',
                                marginBottom: '5px',
                                color: '#4a90e2',
                                fontWeight: '600',
                            }}
                        >
                            Upload Blog Image
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            onChange={handleImageChange}
                            className="form-control rounded-pill"
                            style={{
                                padding: '10px',
                                borderColor: '#4a90e2',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 rounded-pill"
                        style={{
                            backgroundColor: '#4a90e2',
                            borderColor: '#4a90e2',
                            fontWeight: '600',
                            boxShadow: '0px 4px 10px rgba(74, 144, 226, 0.4)',
                        }}
                    >
                        Submit Blog
                    </button>
                </form>
            </div>
    );
};

export default AddBlog;
