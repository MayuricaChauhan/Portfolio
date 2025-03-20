import { Link } from "react-router-dom";

const SummerCamp = () => {
  return (
    <section className="my-16 text-center p-10 bg-white rounded-2xl shadow-lg border border-gray-200 max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">🌍 Summer Camp</h2>
      <p className="text-gray-700 mb-8 text-lg max-w-[650px] mx-auto leading-relaxed">
        Join our short-term summer programs at top universities worldwide!  
        Experience campus life, academic excellence, and cultural adventures  
        before starting your formal studies.
      </p>

      <div className="flex justify-center space-x-6">
        {/* USA Button */}
        <Link to="/usa">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition">
            USA 
          </button>
        </Link>

        {/* UK Button */}
        <Link to="/uk">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition">
            UK 
          </button>
        </Link>

        {/* Dubai Button */}
        <Link to="/dubai">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition">
            Dubai 
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SummerCamp;
