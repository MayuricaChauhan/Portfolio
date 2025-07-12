import { Link } from "react-router-dom";

const ClientLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-800">

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          Your Journey Begins Here
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Personalized career guidance, international admissions support, and expert counselling — everything you need to shape a successful academic future.
        </p>
        <Link
          to="https://calendly.com/iec-mayuricaeducation/book-a-counselling-session-with-uninxt"
          className="bg-primary hover:bg-violet-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
        >
          Book Your Free Counselling Session
        </Link>
      </section>

      {/* Services Snapshot Section */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-20 py-16">
        <div className="bg-white p-6 rounded-lg shadow text-left hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Career Counselling
          </h3>
          <p className="text-gray-700">
            Discover your strengths and make informed career decisions with our expert guidance and psychometric tools.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-left hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Admissions Abroad
          </h3>
          <p className="text-gray-700">
            End-to-end support for applying to high schools and universities across the globe, including MBBS admissions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-left hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Scholarships & Visa Help
          </h3>
          <p className="text-gray-700">
            Navigate your funding and visa journey with confidence through our reliable and up-to-date consulting.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-10 px-6">
        <h4 className="text-2xl font-bold text-primary mb-4">
          Ready to Take the First Step?
        </h4>
        <p className="mb-6 text-gray-700 max-w-xl mx-auto">
          Whether you&apos;re a student or parent, we&apos;re here to support you at every stage of your academic journey.
        </p>
        <Link
          to="https://calendly.com/iec-mayuricaeducation/book-a-counselling-session-with-uninxt"
          className="inline-block bg-primary hover:bg-violet-800 text-white py-2 px-6 rounded-lg font-medium transition"
        >
          Talk to a Counsellor Now
        </Link>
      </section>
    </div>
  );    
};

export default ClientLanding;
 