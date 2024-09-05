import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogsData from './BlogData';
import './BlogDetail.css'; // Import the CSS file


const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  console.log('Blogs Data:', BlogsData);

  // Find the blog that matches the blogId
  
  return (
    <div className="blog-detail-container">
      <h1 className="blog-detail-title">{BlogsData[0].title}</h1>
      
     
      
      <div dangerouslySetInnerHTML={{ __html: BlogsData[0].description }} className="blog-detail-content"></div>
    </div>
  );
};

export default BlogDetail;
