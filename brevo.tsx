// This example is for TypeScript node
import React from 'react'
const brevo = () => {
    var SibApiV3Sdk = require('sib-api-v3-typescript');

    var apiInstance = new SibApiV3Sdk.CreateContact();

    // Configure API key authorization: api-key

     var apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = process.env.REACT_APP_BREVO_API_KEY;

    // Configure API key authorization: partner-key

    // var partnerKey = apiInstance.authentications['partnerKey'];
    // partnerKey.apiKey = "YOUR API KEY"
    var createContact = { 'email' : "john@doe.com" };

    apiInstance.createContact(createContact).then(function(data) {
    console.log('API called successfully. Returned data: ' + data);
    }, function(error) {
    console.error(error);
});
  return (
    <div>
        
    </div>
  )
}

export default brevo

