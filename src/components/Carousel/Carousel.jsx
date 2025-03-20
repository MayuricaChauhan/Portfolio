import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  const handleLearnMoreClick = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full h-96 relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full">
            <img
              src={slide.image}
              alt={`Slide ${index} - Comprehensive academic counseling services`}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="md:text-7xl text-4xl font-bold">{slide.heading}</h2>
              <p className="md:text-2xl text-xl mt-2">{slide.subtext}</p>
            </div>
            <button onClick={handleLearnMoreClick}
              className="absolute bottom-4 md:text-xl text-xl left-1/2 transform -translate-x-1/2 primary-btn text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subtext: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
