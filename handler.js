'use strict';
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-2'});

module.exports.sendEmail = async (event) => {
  const params = {
    Destination: {
      ToAddresses: ['davidtodd39@gmail.com']
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
    Source: 'davidtodd39@gmail.com'
  }
  await ses.sendEmail(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Email sent to ${params.Destination.ToAddresses}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
