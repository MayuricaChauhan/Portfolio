import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import Footer from "./components/Footer/Footer";
import Form from "./components/SubscriptionForm/Form.jsx";
import Chatbot from "./components/Botpress/Chatbot.jsx";
// import Booking from "./components/AppointmentBooking/Booking.jsx";
const App = () => {
  

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
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
      <BlogsComp />
      <Form />
      <Chatbot/>
      <Footer />
    </div>
  );
};

export default App;
