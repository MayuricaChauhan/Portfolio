import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogsData from "./BlogData";



const BlogsComp = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? BlogsData : BlogsData.slice(0, 3);

  return (
    <div id="blogs" className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
      <section data-aos="fade-up" className="container ">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
          Our Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleBlogs.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <BlogCard {...item} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="primary-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All Posts"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
