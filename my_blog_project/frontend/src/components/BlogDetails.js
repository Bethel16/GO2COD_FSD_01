import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById } from "../pages/apiServces";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await getBlogById(id);
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };
        fetchBlog();
    }, [id]);

    if (!blog) return <p className="loading-text">Loading...</p>;

    return (
        <div className="container mt-5 blog-detail-container">
            <div className="blog-detail-row">
                {/* Blog Image */}
                <div className="blog-image-container">
                    <img
                        className="blog-detail-image"
                        src={blog.featured_image || "https://via.placeholder.com/600x400"}
                        alt={blog.title}
                    />
                </div>

                {/* Blog Content */}
                <div className="blog-content">
                    <h1 className="blog-detail-title">{blog.title}</h1>
                    <p className="blog-detail-body">{blog.body}</p>
                    <button
                        className="btn btn-primary edit-btn mt-3"
                        onClick={() => navigate(`/blogs/edit/${blog.id}`)}
                    >
                        Edit Blog
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
