// Define a React functional component named ResultDisplay
export default function ResultDisplay({ result, domain }) {
    // Return a JSX element that displays the SSL certificate check result
    return (
      <div>
        <h2>Results for {domain}</h2>
        
       
        <p>
          <strong>Validity:</strong> 
         
          {result.isValid ? 'Valid' : 'Invalid'}
        </p>
        

        <p>
          <strong>Expiration Date:</strong> 
          {result.expirationDate}
        </p>
        
        <p>
          <strong>Issuer:</strong> 
          {result.issuer}
        </p>
        

        <p>
          <strong>Subject:</strong> 
          {result.subject}
        </p>
        

        <p>
          <strong>CA Validity:</strong> 
          {result.caValidity}
        </p>
        

        <p>
          <strong>Revocation Status:</strong> 
          {result.revocationStatus}
        </p>
      </div>
    );
  }