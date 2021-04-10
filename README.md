# Quiz-App
A platform to answer just few questions and get test summary afterwards.

## How To Deploy App
a. Netlify Directory Deployment
   Log on to to app.netlify.com/drop, then drag and drop the project directory.
   
b. Netlify Git-based Deployment
   - Run npm build on your project to ready the app's 'dist' publish directory.
   - Create a git repository and push the project unto the master or any branch of your choice.
   - Sign in to https://netlify.com, select new site from Git and select your repo(GitHub, GitLab, or BitBucket). Authenticate search for the repo given the options.
   - Set your public directory to 'dist' and your build command to npm run build.

## How To Run App
- Install Node and NPM
- Open the command line, run 'npm install -g @vue/cli' to install vue. Confirm Vue installation by running 'vue --V'.
- Log on to https://github.com/aibe64/Vue-Quiz-App.com and Clone the project.
- Open the project's root directory and run the command 'npm install' to update project dependencies
- Run 'npm run serve' to start up the project

## Technology Used
-  Vue JS
-  Bootstrap and Vue-bootstrap

## What I'd do to make the application more scalable
-  add more questions from other sources
-  group the questions to suit various fields or categories
-  give for users to add custom questions and answer options

## What i'd do differently
-  I'd highlight the right and wrong answers on after user selects to enable the user keep track of his progress.
-  I'll display the ratio of correct answer to total question beside the stop clock
