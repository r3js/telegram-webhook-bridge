const config = {
  "service": "webhooks-center",
  "frameworkVersion": "3",
  "stage": "dev",
  "plugins": [
    "serverless-domain-manager"
  ],
  "provider": {
    "name": "aws",
    "runtime": "nodejs14.x",
    "lambdaHashingVersion": 20201221,
    "region": "eu-west-3",
    "timeout": 30,
    "deploymentBucket": {
      "name": "deployment-bucket-eu-west-3"
    },
    "environment": {
      "BOT_TOKEN": process.env.BOT_TOKEN,
      "DEST_ID": process.env.DEST_ID
    }
  },
  "functions": {
    "webhookCenter": {
      "handler": "handler.webhookCenter",
      "events": [
        {
          "http": {
            "path": "/webhook",
            "method": "any",
            "cors": true
          }
        }
      ]
    }
  },
  "custom": {
    "customDomain": {
      "domainName": "webhooks-center.s.r3js.com",
      "stage": "dev",
      "basePath": "",
      "certificateName": "*.s.r3js.com",
      "createRoute53Record": true,
      "endpointType": "regional",
      "securityPolicy": "tls_1_2",
      "apiType": "rest",
      "autoDomain": true
    }
  },
  "package": {
    "exclude": [
      "node_modules/.pnpm/**",
      "node_modules/.ignored/**",
      "node_modules/aws-sdk/**"
    ]
  }
}

module.exports = config