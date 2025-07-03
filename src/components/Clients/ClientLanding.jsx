import { Link } from "react-router-dom";

const ClientLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-800">

      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">Grow Your Brand With Us</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          We design modern, scalable digital solutions to help your business thrive online. Let&#39;s build something great together.
        </p>
        <Link
          to="/appointment"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
        >
          Book a Free Consultation
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-20 py-16">
        <div className="bg-white p-6 rounded shadow text-left">
          <h3 className="text-xl font-semibold mb-2">Custom Websites</h3>
          <p>Clean, responsive websites tailored to your brand.</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-left">
          <h3 className="text-xl font-semibold mb-2">SEO & Marketing</h3>
          <p>Optimized for visibility, speed, and conversion.</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-left">
          <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
          <p>We stay with you post-launch to keep things running smoothly.</p>
        </div>
      </section>
    </div>
  );
};

export default ClientLanding;
