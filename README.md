# Email Service

A serverless function that sends emails using the following tech:
- AWS Lambda
- AWS SES
- AWS SDK
- Node.js

### Installation:
- ```fork``` + ```clone``` repository
- In AWS, create IAM group with necessary permissions, and add an IAM user to the group
- Access secrets from AWS Console and add GitHub secrets to your GitHub repository (```AWS_ACCESS_KEY_ID``` and ```AWS_SECRET_ACCESS_KEY```)
- Update ```serverless.yml``` file as needed
- Verify email by creating identity in AWS Console (via Amazon Simple Email Services)
- Run the GitHub Actions CI/CD workflow by committing and pushing changes to your remote repo

### Testing
- Once you deploy the Lambda Function via GitHub Actions, you will see a generated URL in the build logs
- The following request to that generated endpoint would send an email to john.doe@example.com with the subject "Hello from Lambda" and the body "This is a message generated automatically from a Lambda function!":

``` bash
GET /?email=john.doe@example.com&message=This%20is%20a%20message%20generated%20automatically%20from%20a%20Lambda%20function!&subject=Hello%20from%20Lambda
```