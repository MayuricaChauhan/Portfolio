// import React from "react";
import Slider from "react-slick";
import pic1 from "../../assets/TestimonialSlider/1.jpeg";
import pic2 from "../../assets/TestimonialSlider/2.jpeg";
import pic3 from "../../assets/TestimonialSlider/3.jpeg";
import pic4 from "../../assets/TestimonialSlider/4.jpeg";
import pic5 from "../../assets/TestimonialSlider/5.jpeg";
const testimonialData = [
  {
    id: 1,
    name: "Astha - Student, India",
    text: "My brother who had come from  Ukraine due to war was anxious that what will happen to his career since he left his prestigious Medicine degree. Since his love for abroad didn't let him to switch his degree from India. He decided to pursue a degree from Canada. So one of our friends suggested us to connect to USO and we got in touch with Mayurica Mam. We discussed everything in detail about our scenario and she didn't left any stone unturned and did a lot of research . Our six months experience with her was amazing as her extraordinary attention to our details took this journey to another level. Thank you for being so passionate when finding opportunities for us and giving us honest feedback.",
    img: pic1,
  },
  {
    id: 2,
    name: "Saranjit Singh Jagrao - Student, India",
    text: "Having visited numerous consultants before, I had been disappointed by the lack of proper responses. However, my experience with Mayurika Ma’am was a complete contrast. Her polite and incredibly helpful nature stood out as she consistently responded promptly, guiding me through every step of the process. Thanks to her invaluable guidance, I successfully secured admission to one of the top universities, and my visa process was remarkably smooth. Her support was instrumental in making this journey hassle-free and successful.",
    img: pic2,
  },
  {
    id: 3,
    name: "Ramya Meduri - Student, India",
    text: "Mayurica mam has been nothing short of splendid. She has been guiding me with her best advice since the beginning and has always been nice and cordial towards me wherever I had questions about my career and the university and everything else. When I started my journey, I just thought it would be a difficult one but to my surprise it just turned out to be a very very great experience and I would honestly recommend it to anyone who asks me for help. Loads of good wishes!!!",
    img: pic3,
  },
  {
    id: 4,
    name: "Drishti Grover - Student, India",
    text: "With my whole heart i want to express my gratitude towards Mayurica ma’am , to me she was one of the winsome , humble and passionate women , her dedication and never ending joy drifted me towards her work , there was a time i used to freak out thinking about my admission and she was right there to calm me down and show me absolute right direction to go on and that’s the reason today i am relief about my further studies , even on personal level i connect to her she will always going to remain my mentor figure . My love and respect for her will always going to be  consistent, can’t thank you enough for all the help.",
    img: pic4,
  },
  {
    id: 5,
    name: "Mohit Lath - Student, India",
    text: "I am very grateful for the assistance provided by Mayurica Mam , from deciding the course , its offer letter to  visa assistance everything was done in a pure professional manner  with minimal botheration taken by me . Thankyou mam your assistance played main role that i will be in Montreal soon .",
    img: pic5,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10" id = "testimonials">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt="testinomials"
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
