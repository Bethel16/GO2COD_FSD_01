import React from 'react';

const BlogPost = ({ post }) => {
  // Ensure images exist and fall back to a placeholder if undefined
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      <div className="relative">
        <img className="w-full h-56 object-cover" src='' alt={post.title} />
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h2>
        <p className="text-gray-700 text-base mb-4">{post.content ? post.content.slice(0, 100) : "No content available"}...</p>
        <div className="flex justify-between items-center mt-4">
          <a href={`/posts/${post.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
            Read More
          </a>
          <span className="text-gray-500 text-sm">{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
