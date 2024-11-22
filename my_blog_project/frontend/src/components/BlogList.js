import React, { useEffect, useState } from "react";
import { getBlog } from "../pages/apiServces";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye } from 'react-icons/fa';
import AddBlog from "./AddBlog";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [showAddBlog, setShowAddBlog] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await getBlog();
                setBlogs(res);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="container mt-5 blog-list-container">
            <h2 className="blog-list-title">Blog List</h2>
            <div className="row">
                {blogs.map(blog => (
                    <div key={blog.id} className="col-md-4 mb-4">
                        <div className="card blog-card shadow-sm">
                            <img
                                className="card-img-top blog-image"
                                src={blog.featured_image || 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68'}
                                alt={blog.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title blog-title">{blog.title}</h5>
                                <p className="card-text blog-text">
                                    {blog.body.slice(0, 100)}...
                                </p>
                                <div className="d-flex justify-content-between blog-actions">
                                    <a href={`/blogs/${blog.id}`} className="btn btn-outline-primary btn-sm blog-view-btn">
                                        <FaEye /> Detail view
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn btn-success mt-3 add-blog-btn" onClick={() => setShowAddBlog(true)}>Add new blog</button>
            {showAddBlog && <AddBlog handleCancelBtn={() => setShowAddBlog(false)} />}
        </div>
    );
};

export default BlogList;
