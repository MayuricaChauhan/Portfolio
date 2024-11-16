import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiNotebook, GiGraduateCap } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';
import { MdOutlinePsychology, MdOutlineSchool } from 'react-icons/md';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { BiCreditCard } from 'react-icons/bi';
import { RiVisaLine } from 'react-icons/ri';
import BookCounselling from "../Counselling/BookCounselling";

const skillsData = [
  {
    name: "Career Counselling",
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    link: "#",
    description:
      "Expert guidance to help you identify and pursue the right career path based on your interests, skills, and market demand.",
    buttonComponent: <BookCounselling />,
    aosDelay: "0",
  },
  {
    name: "Admissions Abroad",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "Comprehensive assistance for securing admissions in prestigious institutions worldwide, tailored to your academic profile and preferences.",
    buttonComponent: <BookCounselling />,
    aosDelay: "300",
  },
  // Other services...
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? skillsData : skillsData.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Services | Academic & Career Guidance</title>
        <meta
          name="description"
          content="Explore our services for career counseling, admissions abroad, profile building, psychometric testing, and more. Achieve your academic and career goals with expert guidance."
        />
        <meta
          name="keywords"
          content="career counseling, admissions abroad, profile building, psychometric testing, scholarships, visa counselling"
        />
        <meta property="og:title" content="Services | Academic & Career Guidance" />
        <meta
          property="og:description"
          content="Discover a range of services to help you achieve your academic and career goals. Expert guidance in career counseling, admissions, profile building, and more."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <span id="services"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Discover a range of services designed to help you achieve your academic and career goals.
            </p>
          </div>
          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {visibleSkills.map((skill) => (
              <article
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4 relative overflow-hidden group rounded-lg"
              >
                <div className="group-hover:blur-sm transition-all duration-300">
                  {skill.icon}
                </div>
                <h2 className="text-lg font-semibold group-hover:blur-sm transition-all duration-300">
                  {skill.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 group-hover:blur-sm transition-all duration-300">
                  {skill.description}
                </p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-50 rounded-lg">
                  {skill.buttonComponent}
                </div>
              </article>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
