import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './BlogCard.css'; // Import the CSS file

const BlogCard = ({ image, title, description, id, fullContent }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    // Pass the blog data to BlogDetail via state
    navigate(`/blog/${id}`, { state: { image, title, fullContent } });
  };

  // Function to truncate text and remove HTML tags
  const truncateText = (text, maxLength) => {
    const strippedText = text.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
    return strippedText.length > maxLength ? `${strippedText.substring(0, maxLength)}...` : strippedText;
  };

  return (
    <div className="dark:text-white group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="Blog"
          className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300"
        />
      </div>
      <div className="space-y-2 p-4 ml-6 bg-white dark:bg-slate-950 -translate-y-16">
        <h1 className="blog-card-title line-clamp-1 text-2xl font-semibold">{title.substring(0,20)}...</h1>
        <p className="line-clamp-4 text-gray-500 text-sm">
          {truncateText(description, 100)}
        </p>
        <div className="flex justify-end pr-4 text-gray-500">
          <FaArrowRight
            onClick={handleReadMore}
            className="cursor-pointer group-hover:text-primary group-hover:translate-x-2 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
