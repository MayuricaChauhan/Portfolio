// src/App.js
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import pic2 from "./assets/carousel/1.webp";
import pic1 from "./assets/carousel/1.jpg";
import pic3 from "./assets/carousel/2.jpg";
// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeroSection from "./components/Hero/HeroSection.jsx";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import Footer from "./components/Footer/Footer";
import Form from "./components/SubscriptionForm/Form.jsx";
import Chatbot from "./components/Botpress/Chatbot.jsx";
import BookCounselling from "./components/Counselling/BookCounselling.jsx";
import SignIn from "./components/Authentication/SignIn.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import Certificates from "./components/Certificates/Certifications.jsx";
import FAQ from "./components/Accordion/FAQItem.jsx";
import BlogDetail from "./components/Blogs/BlogDetail.jsx";
import Announcement from "./components/Announcement/Announcement.jsx";
const App = () => {
  const slides = [
    {
      image : pic1,
      heading : "Find the best college for you",
      subtext : "Get the best counselling from our experts"
    },
    {
      image : pic2,
      heading : "Choose the right career",
      subtext : "Career Guidance is just a click away"
    },
    {
      image : pic3,
      heading : "Get the best counselling",
      subtext : "With a supportive and understanding attitude to help you prosper"
    }
  ]
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100
    });
    AOS.refresh();
  }, []);

  return (
     <Router>
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden text-justify">
      <Announcement />
      <div style={{ marginTop: "50px" }}> {/* Offset for the Announcement banner */}
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel slides={slides} />
              <HeroSection />
              <Hero />
              <Services />
              <br /><br />
              <Certificates />
              <Testimonial />
              <BlogsComp />
            
              <Chatbot />
              <FAQ />
            </>
          } />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
          <Route path="/book-counselling" element={<BookCounselling />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </div>
  </Router>
  );
};

export default App;
