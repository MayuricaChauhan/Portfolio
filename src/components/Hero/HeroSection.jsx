import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './HeroSection.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,
    });
  }, []);
  const handleLearnMoreClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-white h-[75vh] flex items-center justify-center">
      <div
        className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto animate-fade-in"
        data-aos="fade-up" // Add animation type here
      >
        <h1 className="text-primary">Mayurica Education – Expert Study Abroad Counseling & Visa Guidance</h1> <br />
        <h2
          className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-1 flex items-center gap-2"
          data-aos="fade-up" // Add animation type here
          data-aos-delay="100" // Optional: delay before animation starts
        >
          Mayurica<span className="text-primary">Chauhan</span>
        </h2>

        <p
          className="text-sm text-gray-900 leading-relaxed mb-4 dm-serif-text-regular-italic"
          data-aos="fade-up" // Add animation type here
          data-aos-delay="300" // Optional: delay before animation starts
        >
          With an impressive 8 years of experience in Human Resources and 6 years in international student admissions, Ms. Mayurica Chauhan’s extensive journey as an educational counselor and study abroad consultant has been life-changing for many aspiring students. <br />
          Ms. Mayurica’s educational background includes a Bachelor of Commerce from Kirori Mal College, Delhi, and an MBA in Human Resource Management from the University of New Haven, USA. <br />
          In addition, Ms. Chauhan holds the prestigious UCLA certification in career counselling.
          She is also a proud recipient of the IEC certificate from the University of California, Irvine. <br />
          Ms. Chauhan’s own experience as an international student allows her to deeply empathize with and guide students who wish to study in USA, UK, Canada, Australia, and Europe.
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="0"
          className="primary-btn"
          onClick={handleLearnMoreClick}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
