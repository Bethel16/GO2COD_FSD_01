import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../pages/apiServces";

const BlogDetail = () => {
    const { id } = useParams();
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

    if (!blog) return <p>Loading...</p>;

    return (
        <div className="container mt-5">
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    );
};

export default BlogDetail;
