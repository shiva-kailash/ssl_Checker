// Import the useState hook from React
import { useState } from 'react';

// Import the ResultDisplay component
import ResultDisplay from '../components/ResultDisplay';

// Define the Home component
export default function Home() {
  // Initialize state variables for domain and result
  const [domain, setDomain] = useState(''); // Domain name entered by the user
  const [result, setResult] = useState(null); // Result of the SSL certificate check

  // Define the handleSubmit function to handle form submission
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Send a POST request to the /api/check-ssl endpoint with the entered domain name
    const response = await fetch(`/api/check-ssl`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ domain }) // Convert the domain object to JSON
    });

    // Parse the response as JSON
    const data = await response.json();

    // Update the result state with the response data
    setResult(data);
  };

  // Render the component
  return (
    <div>
      <h1>SSL Certificate Checker</h1>

      {/* Render a form with a text input and a submit button */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={domain} 
          onChange={(e) => setDomain(e.target.value)} // Update the domain state when the input changes
          placeholder="Enter domain name" 
        />
        <button type="submit">Check SSL</button>
      </form>

      {/* Render the ResultDisplay component if the result state is not null */}
      {result && <ResultDisplay result={result} domain={domain} />}
    </div>
  );
}