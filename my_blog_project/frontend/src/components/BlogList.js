import React, { useEffect, useState } from "react";
import { getBlog } from "../pages/apiServces";
import { Link } from "react-router-dom";
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

    const handleAddBlog = (newBlog) => {
        // Add the new blog to the list and close the modal
        setBlogs([newBlog, ...blogs]);
        setShowAddBlog(false);
    };

    return (
        <section className="blog-list-section py-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="blog-list-title">Latest Blogs</h2>
                    <button
                        className="btn btn-primary add-blog-btn"
                        onClick={() => setShowAddBlog(true)}
                    >
                        Add Blog
                    </button>
                </div>
                <div className="row">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="col-md-4 mb-4">
                            <div className="blog-card">
                                <img
                                    src={blog.featured_image || 'https://via.placeholder.com/400x250'}
                                    alt={blog.title}
                                    className="blog-image"
                                />
                                <div className="blog-content">
                                    <h5 className="blog-title">{blog.title}</h5>
                                    <p className="blog-description">
                                        {blog.body.slice(0, 100)}...
                                    </p>
                                    <Link to={`/blogs/${blog.id}`} className="blog-read-more">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for Adding Blog */}
                {showAddBlog && (
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Blog</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={() => setShowAddBlog(false)}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <AddBlog handleAddBlog={handleAddBlog} handleCancelBtn={() => setShowAddBlog(false)} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogList;
