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
      buttonComponent: <BookCounselling/>,
    aosDelay: "0",
  },
  {
    name: "Admissions Abroad",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "Comprehensive assistance for securing admissions in prestigious institutions worldwide, tailored to your academic profile and preferences.",
      buttonComponent: <BookCounselling/>,
    aosDelay: "300",
  },
  {
    name: "Profile Building",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Strategic support to enhance your profile through extracurricular activities, internships, and skill development to stand out in the competitive admissions process.",
      buttonComponent: <BookCounselling/>,
    aosDelay: "500",
  },
  {
    name: "Psychometric Testing",
    icon: <MdOutlinePsychology className="text-4xl text-primary" />,
    link: "#",
    description:
      "Reliable psychometric tests to assess your abilities, personality traits, and interests, aiding in making informed career and academic decisions.",
      buttonComponent: <BookCounselling/>,
    aosDelay: "700",
  },
  {
    name: "High School Abroad",
    icon: <MdOutlineSchool className="text-4xl text-primary" />,
    link: "#",
    description:
      "Guidance for high school students aiming to study abroad, including application assistance and information on international schooling systems.",
      buttonComponent: <BookCounselling/>,
    aosDelay: "0",
  },
  {
    name: "MBBS Admissions",
    icon: <GiGraduateCap className="text-4xl text-primary" />,
    link: "#",
    description:
      "Specialized services to help aspiring medical students gain admission to MBBS programs in top universities globally.",
      buttonComponent: <BookCounselling/>,
    aosDelay: "300",
  },
  {
    name: "Scholarships and Loans",
    icon: <BiCreditCard className="text-4xl text-primary" />,
    link: "#",
    description:
      "Information and application support for scholarships and educational loans to finance your studies abroad.",
      buttonComponent: <BookCounselling/>,
    aosDelay: "500",
  },
  {
    name: "Financial Aid Consulting",
    icon: <HiOutlineDocumentText className="text-4xl text-primary" />,
    link: "#",
    description:
      "Expert advice on navigating the financial aid process, ensuring you secure the necessary funding for your education.",
      buttonComponent: <BookCounselling/>,
    aosDelay: "700",
  },
  {
    name: "Visa Counselling",
    icon: <RiVisaLine className="text-4xl text-primary" />,
    link: "#",
    description:
      "Step-by-step guidance on visa applications, interviews, and documentation to ensure a smooth and successful visa process.",
      buttonComponent: <BookCounselling/>,
    aosDelay: "0",
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? skillsData : skillsData.slice(0, 4);

  return (
    <>
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
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4 relative overflow-hidden group rounded-lg"
              >
                <div className="group-hover:blur-sm transition-all duration-300">{skill.icon}</div>
                <h1 className="text-lg font-semibold group-hover:blur-sm transition-all duration-300">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400 group-hover:blur-sm transition-all duration-300">
                  {skill.description}
                </p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-50 rounded-lg">
                  {skill.buttonComponent}
                </div>
              </div>
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
