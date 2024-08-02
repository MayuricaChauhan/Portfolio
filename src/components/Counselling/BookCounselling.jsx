// src/components/BookCounselling.jsx
import { useState } from 'react';
import { auth } from '../../firebase';// Update the path if needed
import { useNavigate } from 'react-router-dom'; // Import for navigation

const freeCalendlyLink = 'https://calendly.com/iec-mayuricaeducation/career-counselling-meeting';

const BookCounselling = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBookSession = async () => {
    setIsLoading(true);

    try {
      const user = auth.currentUser;
      if (!user) {
        // Redirect to sign-in page if user is not authenticated
        navigate('/signin'); // Ensure the route matches your sign-in page
        setIsLoading(false);
        return;
      }

      // Redirect to Calendly (You can adjust this logic if needed)
      const link = freeCalendlyLink; // Adjust this logic as needed
      window.location.href = link;

    } catch (error) {
      console.error("Error booking session: ", error);
      alert('An error occurred while booking the session.');
    }

    setIsLoading(false);
  };

  return (
    <button onClick={handleBookSession} disabled={isLoading} className="primary-btn">
      {isLoading ? 'Booking...' : 'Book a Counselling Session'}
    </button>
  );
};

export default BookCounselling;
