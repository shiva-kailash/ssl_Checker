# SSL Certificate Checker

A full-stack web application that checks and validates SSL certificates for given domain names. This application allows users to verify the security and validity of SSL certificates used by websites.

## Project Structure
## Features

- **Frontend:**
  - Built with Next.js for server-side rendering and client-side interactions.
  - Input field for domain name.
  - Submit button to initiate SSL certificate check.
  - Results section to display SSL certificate details including validity status, expiration date, issuer details, and more.
  - Error handling for invalid domains and network issues.

- **Backend:**
  - Built with Node.js and Express.
  - API endpoint to fetch and validate SSL certificates.
  - Performs domain name validation, certificate extraction, validity checks, and basic revocation status (CRL/OCSP).

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

1. **Clone the repository:**
  
   git clone https://github.com/shiva-kailash/ssl_checker.git
   cd ssl_checker
   ## Features

2. Install dependencies:

       npm install

4. Install additional packages:

   Running the Application :
    
      1. Start the Backend Server
         
              In one terminal window, navigate to the project directory and start the server:
      
      
                  npm run server
               You should see output indicating the server is running on port 3001.
      
      2. Start the Frontend Application
         
               In another terminal window, navigate to the project directory and start the Next.js application:
      
                     npm run dev
      
               You should see output indicating the frontend is running on port 3000.
      
      3. Access the Application
      
             Open your web browser and go to http://localhost:3000 to access the SSL Certificate Checker UI.

API Endpoint:

  POST /api/check-ssl

    Request Body:
    
    {
      "domain": "example.com"
    }
    Response:
    {
      "isValid": true,
      "expirationDate": "2024-09-18T00:00:00Z",
      "issuer": "Example CA",
      "subject": "example.com",
      "caValidity": "Valid",
      "revocationStatus": "Not Checked"
    }


Validation Functions:
  
    Domain Name Validation: Ensures that the domain name is a valid Fully Qualified Domain Name (FQDN).
    SSL Certificate Checks: Fetches and validates SSL certificates, including checking the validity status, expiration date, issuer details, and revocation status (basic implementation).

Contributing: 
   
    Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

License: 
       
    This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments:

    Next.js for providing a powerful framework for React applications.
    React for building user interfaces.
    Node.js and Express for server-side development.
