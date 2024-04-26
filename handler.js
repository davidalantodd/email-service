'use strict';
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-2'});

module.exports.sendEmail = async (event) => {
  const queryParams = event.queryStringParameters || {};
  let { email, message, subject } = queryParams;

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Email is required',
      }),
    };
  }

  message = message || "This is a message generated automatically from a Lambda function!";
  subject = subject || "Hello from Lambda"

  const params = {
    Destination: {
      ToAddresses: [email]
    },
    Message: {
      Body: {
        Text: {
          Data: 'This is a message generated automatically from a Lambda function!'
        }
      },
      Subject: {
        Data: 'Hello from Lambda',
      },
    },
    Source: email
  }
  
  await ses.sendEmail(params).promise();
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Email sent to ${email} with subject ${subject} and message ${message}`,
        input: event,
      },
      null,
      2
    ),
  };
};
