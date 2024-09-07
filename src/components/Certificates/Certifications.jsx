import pic from "../../assets/certificates/certifications.jpeg";
import 'Certifications.css'

const Certifications = () => {
  return (
    <div className="certifications-section max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <img src={pic} alt="Certifications" className="w-full h-auto rounded-t-lg mb-4" />
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Certifications</h2>
      <ul className="list-disc list-inside text-gray-700 hello">
        <li>B.Com (Hons) from Kirorimal College, Delhi University</li>
        <li>MBA (Human Resources) from University of New Haven, Connecticut, USA</li>
        <li>Certificate in Counseling from UCLA Extension</li>
        <li>Pursuing IEC Certificate (Independent Education Counselor) University of California, Irvine</li>
      </ul>
    </div>
  );
};

export default Certifications;
