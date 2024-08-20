import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './HeroSection.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation should happen only once
    });
  }, []);

  return (
    <div className="bg-white h-[75vh] flex items-center justify-center">
      <div
        className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto "
        data-aos="fade-up" // Add animation type here
      >
        <h1
          className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-1 flex items-center gap-2"
          data-aos="fade-up" // Add animation type here
          data-aos-delay="100" // Optional: delay before animation starts
        >
          Mayurica<span className="text-primary">Chauhan</span>
        </h1>
        <p
          className="text-sm text-gray-900 leading-relaxed mb-4 dm-serif-text-regular-italic"
          data-aos="fade-up" // Add animation type here
          data-aos-delay="300" // Optional: delay before animation starts
        >
          With an impressive 8 years of experience in Human Resources and 6 years in international admissions, Ms. Mayurica Chauhan’s extensive journey as an educational counselor and her commitment to guiding students in their academic aspirations has been life-changing for many.
          <br />
          Ms. Mayurica’s educational background includes a Bachelor of Commerce from Kirori Mal College, Delhi and an MBA in Human Resource Management from the University of New Haven in the United States.
          <br />
          In addition, Ms. Chauhan holds the prestigious UCLA certification in career counselling.
          <br />
          She is also a proud recipient of the prestigious IEC certificate from University of California, Irvine. Ms. Chauhan’s own experience as an international student has allowed her to empathize deeply with aspiring students.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
