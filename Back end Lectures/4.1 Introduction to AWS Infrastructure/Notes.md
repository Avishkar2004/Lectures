Introduction to Servers :-
 I like to describe it as a computer that's always connected to the internet. 

- It's always connected to the internet
- It's always on
- It's been configured to "listen" for requests and provide the right files

Your own computer could be a server, if you really wanted.
In reality, when we need a server we tend to rent one, or part of one, that's stored with many others in a big warehouse.

Servers don't have screens because humans don't need to interact with them through a graphical user interface.

If you want a server, these days you tend to go to a provider such as Amazon Web Services , Google Cloud Platform or Digital Ocean and "provision" yourself a server.


What is client server architecture?

- A server is the one who provides requested services.
- Clients are the ones who request services.


Advantages and disadvantages of client-server architecture

Advantages :-
- The centralized network has complete leverage to control the processes and activities.	
- All devices in the network can be controlled centrally.	
- Users have the authority to access any file, residing in the central storage, at any time.	
- It provides a good user interface, easy file finding procedure, and management system for organizing files.	
- Easy sharing of resources across various platforms is possible.	

Disadvantages :-
- If the primary server goes down, the entire architecture is disrupted.
- It is expensive to operate because of the cost of heavy hardware and software tools.
- This architecture requires particular OSs related to networking.
- Too many users at once can cause the problem of traffic congestion.
- It requires highly technical stuff, such as server machines, for maintenance of the network.

What is the cloud?
- "The cloud" refers to servers that are accessed over the Internet, and the software and databases that run on those servers.

What is cloud computing?
- cloud computing is the delivery of computing resources as a service. Moving to the cloud basically means that the resources are owned and managed by a third-party provider, instead of the end-user.

Uses of cloud computing
- Data storage
- Audio and video streaming
- Data analysis
- App development
- Web Development

Benefits of cloud
- Lower upfront costs & reduced infrastructure costs
- Lower carbon emissions
- Easy to scale up or down
- Only pay for what you use

Cloud Services :-
1:- Infrastructure as a Service (IaaS):
- this is the on-demand delivery of computing infrastructure. That means everything – from operating systems and storage to networking and components – is outsourced to a cloud computing company or service. As the individual or the company, you’ll buy what you need on a pay-as-you-go model.

2:- Software as a Service (SaaS):
- This is when you use a complete application on a third-party server or system. Users can access these applications on-demand via the internet, without having to download or maintain any software.

3:- Platform as a Service (PaaS):
- This form of cloud computing is often used by software developers who are looking to focus on development rather than DevOps and administration.

Deployment models of cloud:-

The cloud deployment model identifies the specific type of cloud environment based on ownership, scale, and access, as well as the cloud’s nature and purpose


Different types of cloud computing deployment models are:

1.Public cloud: The public cloud makes it possible for anybody to access systems and services. The public cloud may be less secure as it is open for everyone. The public cloud is one in which cloud infrastructure services are provided over the internet to the general people or major industry groups.
2.Private cloud: The private cloud deployment model is the exact opposite of the public cloud deployment model. It’s a one-on-one environment for a single user (customer). There is no need to share your hardware with anyone else.

3.Hybrid cloud: By bridging the public and private worlds with a layer of proprietary software, hybrid cloud computing gives the best of both worlds. With a hybrid solution, you may host the app in a safe environment while taking advantage of the public cloud’s cost savings.

4.Community cloud: It allows systems and services to be accessible by a group of organizations. It is a distributed system that is created by integrating the services of different clouds to address the specific needs of a community, industry, or business.

5.Multi-cloud: We’re talking about employing multiple cloud providers at the same time under this paradigm, as the name implies. It’s similar to the hybrid cloud deployment approach, which combines public and private cloud resources.

List of Major Public Cloud Providers
Amazon Web Services (AWS)
Microsoft Azure
Google Cloud (GCP—formerly Google Cloud Platform)
IBM Cloud (formerly SoftLayer)
Oracle Cloud
Alibaba Cloud
RedHat
Heroku
Digital Ocean
CloudFlare
Linode
Cloudways
Rackspace


Intro To AWS
- Amazon Web Services (AWS) is a comprehensive cloud computing platform that includes infrastructure as a service (IaaS) and platform as a service (PaaS) offerings. AWS services offer scalable solutions for compute, storage, databases, analytics, and more.
- Amazon Web Services is shortly called AWS which has come up with a set of cloud services that are often used by most organizations, startups, and government agencies
- It helps the companies to handle high traffic to store videos and a massive amount of data. The Structure of AWS EC2 mainly delivers the users in the usage of various virtual machines with different configurations as per the requirements.

AWS Architecture

AWS S3
- S3, or Simple Storage Service, is a cloud storage service provided by Amazon Web Services (AWS). Using S3, you can host any number of files while paying for only what you use.



Development Environment:-
npm init
npm i --save aws-sdk

Creating an S3 Bucket
Import the aws-sdk library to access your S3 bucket:
const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key hereconst ID = '';
const SECRET = '';

// The name of the bucket that you have created
const BUCKET_NAME = 'test-bucket';

Now, we need to initialize the S3 interface by passing our access keys:


const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

With the S3 interface successfully initialized, we can go ahead and create the bucket:

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "eu-west-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});

At this point we can run the code and test if the bucket is created on the cloud:


node create-bucket.js

If the code execution is successful you should see the success message, followed by the bucket address in the output:



Bucket Created Successfully http://test-bucket-2415soig.s3.amazonaws.com/


AWS SES :-
- Amazon Simple Email Service (SES) is a cost-effective email service built on the reliable and scalable infrastructure that Amazon.com developed to serve its own customer base. With Amazon SES, you can send transactional email, marketing messages, or any other type of high-quality content to your customers.

- With Amazon SES, you can send transactional email, marketing messages, or any other type of high-quality content to your customers.

Setting Up Amazon SES
here are a few steps to setting up Amazon SES.

Verify your domain with AWS.
Register a MAIL FROM Domain.
Verify your sender email.
Remove your AWS account from the SES sandbox environment.
Create an AWS IAM user with SES permissions.


Integrating Amazon SES Into Node.js

To get started, install the official AWS SDK npm package, 

npm i aws-sdk.

const AWS = require('aws-sdk');

const SES_CONFIG = {
    accessKeyId: '<SES IAM user access key>',
    secretAccessKey: '<SES IAM user secret access key>',
    region: 'us-west-2',
};

const AWS_SES = new AWS.SES(SES_CONFIG);

let sendEmail = (recipientEmail, name) => {
    let params = {
      Source: '<email address you verified>',
      Destination: {
        ToAddresses: [
          recipientEmail
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: 'This is the body of my email!',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Hello, ${name}!`,
        }
      },
    };
    return AWS_SES.sendEmail(params).promise();
};

let sendTemplateEmail = (recipientEmail) => {
    let params = {
      Source: '<email address you verified>',
      Template: '<name of your template>',
      Destination: {
        ToAddresse': [ 
          recipientEmail
        ]
      },
      TemplateData: '{ \"name\':\'John Doe\'}'
    };
    return AWS_SES.sendTemplatedEmail(params).promise();
};

module.exports = {
  sendEmail,
  sendTemplateEmail,
};


Interview Questions
What is Amazon EC2?

EC2 is short for Elastic Compute Cloud, and it provides scalable computing capacity. Using Amazon EC2 eliminates the need to invest in hardware, leading to faster development and deployment of applications. You can use Amazon EC2 to launch as many or as few virtual servers as needed, configure security and networking, and manage storage

What is Amazon S3?
S3 is short for Simple Storage Service, and Amazon S3 is the most supported storage platform available. S3 is object storage that can store and retrieve any amount of data from anywhere.