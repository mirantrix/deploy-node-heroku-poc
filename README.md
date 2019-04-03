

# Name
Deploy a Node.js App to Heroku (PoC)


# Description
Deploy Node App to a Cloud Plataform


# Proof of Concept

• Set up a Heroku account && Install Heroku CLI

• Create or use a minimum viable Node.js App with Express.js framework

• Run application in local server

• Deploy Node.js App to Heroku Cloud Plataform

• Open the application in live


# Requirements

• [Node JS](https://nodejs.org/en/download/) as the Server version v0.10.15.1 it includes [NPM](https://www.npmjs.com/).

• Express framework for Node.js

• Heroku Account && Install Heroku CLI


# Install & Run

```

$ git clone https://github.com/mirantrix/deploy-node-heroku-poc.git
$ cd deploy-node-heroku-poc
$ npm install

```

```

$ git commit -m "Initial commit"
$ heroku create <app-name-here>
$ git push heroku master
$ heroku open

```
