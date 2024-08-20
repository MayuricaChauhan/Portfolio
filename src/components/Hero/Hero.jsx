import yellowCar from "../../assets/website/team.png";

const Hero = () => {
  const handleLearnMoreClick = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id = "about" className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Projects</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Empowering{" "}
              <span className="text-primary"> Visions</span>
              <br />
              Engineering{" "}
              <span className="text-primary">Success</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-justify">
            Mayurica is a dedicated and experienced education counselor, passionate about empowering students to make informed decisions about their academic and professional journeys. With a deep understanding of the complexities of the education landscape, she provides personalized guidance and support to help individuals navigate the vast array of educational opportunities available to them. Mayurica's expertise spans career counseling, college admissions, and educational planning, making her services an invaluable resource for those seeking to unlock their full potential.
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
      </div>
    </div>
  );
};

export default Hero;
