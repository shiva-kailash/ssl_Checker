// Export the handler function as the default export
export default async function handler(req, res) {
    // Check if the request method is POST
    if (req.method === 'POST') {
      // Extract the domain from the request body
      const { domain } = req.body;
  
      try {
        // Send a POST request to the /check-ssl endpoint with the domain
        const response = await fetch(`http://localhost:3001/check-ssl`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ domain }) // Convert the domain object to JSON
        });
  
        // Parse the response as JSON
        const data = await response.json();
  
        // Return a 200 OK response with the data
        res.status(200).json(data);
      } catch (error) {
        // Return a 500 Internal Server Error response if an error occurs
        res.status(500).json({ error: 'Unable to check SSL certificate' });
      }
    } else {
      // Return a 405 Method Not Allowed response if the request method is not POST
      res.status(405).json({ error: 'Method not allowed' });
    }
  }