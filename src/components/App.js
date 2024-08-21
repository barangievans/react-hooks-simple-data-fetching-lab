// App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  // State to store the URL of the dog image
  const [dogImage, setDogImage] = useState(null);
  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch data from the API
  useEffect(() => {
    // Async function to fetch the dog image
    const fetchDogImage = async () => {
      try {
        // Make the API request
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        // Update state with the fetched image URL
        setDogImage(data.message);
        // Update loading state
        setLoading(false);
      } catch (error) {
        // Handle any errors during the fetch operation
        console.error('Error fetching dog image:', error);
        setLoading(false); // Ensure loading state is updated
      }
    };

    // Call the async fetch function
    fetchDogImage();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  // Conditional rendering based on loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render the dog image once it's fetched
  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
};

export default App;
