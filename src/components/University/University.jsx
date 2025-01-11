import React from "react";
import "./University.css";
import image1 from "../../assets/university/image1.png";
import image2 from "../../assets/university/image2.png";
import image3 from "../../assets/university/image3.jpg";
import image4 from "../../assets/university/image4.jpg";
import image5 from "../../assets/university/image5.jpg";
import image6 from "../../assets/university/image6.jpg";
const University = () => {
  return (
    <div className="university-container">
      {/* Existing sections */}
      <div className="section">
        <div className="left-container">
          <img src={image1} alt="IIAD Logo" className="section-image" />
        </div>
        <div className="right-container">
          <p className="right-paragraph">
            <span className="highlight">IIAD</span> is a revolutionary learning space that nurtures{" "}
            <span className="highlight">explorers</span>,{" "}
            <span className="highlight">experimenters</span>, and{" "}
            <span className="highlight">innovators</span> with a global outlook through a design programme emerging from India.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="right-container">
          <h2 className="section-heading">Life at IIAD</h2>
          <h3 className="subheading">WELCOME TO THE HUSTLE</h3>
          <p className="right-paragraph">
            Life at IIAD is action-packed, full of energy, rigour, and fun. The campus is alive with students taking their work beyond the classroom into the real world.
          </p>
        </div>
        <div className="left-container">
          <img src={image2} alt="Life at IIAD" className="section-image" />
        </div>
      </div>

      {/* Heading for "Why Choose IIAD?" */}
      <div className="why-choose-heading">
        <h2>Why Choose IIAD?</h2>
      </div>

      {/* Cards section */}
      <div className="cards-container">
        <div className="card-row">
          <div className="card">
            <h3 className="card-title">Courses</h3>
            <p className="card-text">
              IIAD offers undergraduate courses in various design fields, including fashion design, interior design, product design, and communication design.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Academic partnerships</h3>
            <p className="card-text">
              IIAD has academic partnerships with universities such as Kingston University in London and the University for the Creative Arts. Students can transfer to universities abroad to complete their studies.
            </p>
          </div>
        </div>
        <div className="card-row">
          <div className="card">
            <h3 className="card-title">Placement record</h3>
            <p className="card-text">
              IIAD has a good record of internships and placements. Some of the companies that visit IIAD for placements include Netflix, Ogilvy & Mather, and Fabindia.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Hands-on approach</h3>
            <p className="card-text">
              IIAD is known for its innovative and hands-on approach to design education.
            </p>
          </div>
        </div>
        <div className="card-row">
          <div className="card">
            <h3 className="card-title">Animation</h3>
            <p className="card-text">
              IIAD has a stronghold in the animation industry and helps students secure job opportunities.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Campus</h3>
            <p className="card-text">
              IIAD has a 75,000 sq ft campus with all the essentials of a globally rated design school.
            </p>
          </div>
        </div>
      </div>

      {/* Image section below cards */}
      <div className="image-gallery">
  <div className="image-row">
    <div className="image-container">
      <img src={image3} alt="Image 3" className="image" />
      <div className="image-headings">
        <h3 className="image-heading">12:1</h3>
        <h4 className="image-subheading">Student-Faculty Ratio</h4>
      </div>
    </div>
    <div className="image-container">
      <img src={image4} alt="Image 4" className="image" />
      <div className="image-headings">
        <h3 className="image-heading">135+</h3>
        <h4 className="image-subheading">Industry Partnerships</h4>
      </div>
    </div>
  </div>
  <div className="image-row">
    <div className="image-container">
      <img src={image5} alt="Image 3" className="image" />
      <div className="image-headings">
        <h3 className="image-heading">75,000 square ft</h3>
        <h4 className="image-subheading">Campus Infrastructure</h4>
      </div>
    </div>
    <div className="image-container">
      <img src={image6} alt="Image 4" className="image" />
      <div className="image-headings">
        <h3 className="image-heading">₹7.5 LPA average</h3>
        <h4 className="image-subheading">Placement Success</h4>
      </div>
    </div>
  </div>
</div>
<div className="map-container">
        <h1 className="map-heading">Location of IIAD</h1>
        <div className="iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d112245.84242774842!2d77.07464054377029!3d28.458983627409022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1siiad!5e0!3m2!1sen!2sin!4v1736494069745!5m2!1sen!2sin"
            className="map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default University;
