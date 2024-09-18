// Import the required modules
const express = require('express'); // Express.js framework
const axios = require('axios'); // HTTP client library
const https = require('https'); // HTTPS module for making secure requests

// Create an Express.js application
const app = express();

// Enable JSON parsing for incoming requests
app.use(express.json());

// Define a POST endpoint to check the SSL certificate of a domain
app.post('/check-ssl', async (req, res) => {
  // Extract the domain from the request body
  const { domain } = req.body;

  try {
    // Call the getCertificate function to retrieve the SSL certificate information
    const certInfo = await getCertificate(domain);

    // Return the SSL certificate information as JSON
    res.json(certInfo);
  } catch (error) {
    // Return a 500 Internal Server Error response if an error occurs
    res.status(500).json({ error: 'Error retrieving SSL certificate information' });
  }
});

// Define a function to retrieve the SSL certificate information of a domain
async function getCertificate(domain) {
  // Return a Promise that resolves with the SSL certificate information
  return new Promise((resolve, reject) => {
    // Define the options for the HTTPS request
    const options = {
      hostname: domain, // The domain to retrieve the SSL certificate for
      port: 443, // The port to use (443 for HTTPS)
      method: 'GET', // The request method (GET in this case)
      agent: false, // Disable the default HTTPS agent
    };

    // Create an HTTPS request to the domain
    const req = https.request(options, (res) => {
      // Get the SSL certificate from the response socket
      const cert = res.socket.getPeerCertificate();

      // Check if the certificate is valid
      if (!cert || Object.keys(cert).length === 0) {
        // Reject the Promise if the certificate is invalid
        reject('No certificate found');
      } else {
        // Resolve the Promise with the SSL certificate information
        resolve({
          // Check if the certificate is valid
          isValid: res.socket.authorized,
          // Get the expiration date of the certificate
          expirationDate: cert.valid_to,
          // Get the issuer of the certificate
          issuer: cert.issuer.O,
          // Get the subject of the certificate
          subject: cert.subject.CN,
          // Check the CA validity of the certificate
          caValidity: res.socket.authorized ? 'Valid' : 'Invalid',
          // Set the revocation status to "Not Checked" (OCSP/CRL check not implemented)
          revocationStatus: 'Not Checked',
        });
      }
    });

    // Handle errors that occur during the request
    req.on('error', (e) => {
      // Reject the Promise with the error message
      reject(e.message);
    });

    // End the request
    req.end();
  });
}

// Start the Express.js server on port 3001
app.listen(3001, () => {
  // Log a message to the console when the server starts
  console.log('Server running on port 3001');
});