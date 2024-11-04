import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogsData from './BlogData';
import './BlogDetail.css';

const BlogDetail = () => {
  const { blogId } = useParams(); // Extract blogId from URL parameters
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the blog that matches the blogId
  const blog = BlogsData.find((b) => b.id === parseInt(blogId));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-detail-container">
      <h1 className="blog-detail-title">{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.description }} className="blog-detail-content"></div>
    </div>
  );
};

export default BlogDetail;
