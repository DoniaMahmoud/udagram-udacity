## Pipeline Process:

-First, circle ci is configured with my github repo
-Any push to the main branch will make circle ci run the predefined scripts automatically

- All scripts are run for both Frontend and Backend:
  - Installing Dependencies
  - Setting up Elastic Beanstalk and S3 Bucket
  - Build both apps
  - Deploy both apps
- Finally, the frontend and backend are deployed on AWS if the circle ci status is success

-Normal Flow: Code -> Github -> Circle CI -> AWS
