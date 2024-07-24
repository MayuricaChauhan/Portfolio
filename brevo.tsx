// This example is for TypeScript node
import React from 'react'
const brevo = () => {
    var SibApiV3Sdk = require('sib-api-v3-typescript');

    var apiInstance = new SibApiV3Sdk.CreateContact();

    // Configure API key authorization: api-key

    var apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = "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"

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

