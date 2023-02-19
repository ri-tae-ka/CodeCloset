## **CodeCloset**

### Built Using:
#### Frontend: <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
#### Backend: <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"></img> <img arc="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"></img>
#### Database: <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"></img>
#### Linter: <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"></img>
#### Built Using: <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></img>

#### _**IMPORTANT NOTE**_ -

This project does not have a mongoDB connection setup. Setup the connection based on the environments below.

- local development: create a config file (make sure to name it config.env) in the config folder, which exports your db.uri connection. An example is provided, server/config/config.env This file will be ignored by git so your db credentials will be kept safe when the app is deployed.

- production: Make sure you name the environement variable "DB_URI".

## Getting Started

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json .


## File structure

#### `client` - Holds the client application

-  #### `public` - This holds all of our static files

-  #### `src`

-  #### `components` - This folder holds all of the different components that will make up our views

-  #### `App.js` - This is what renders all of our browser routes and different views

-  #### `index.js` - This is what renders the react app by rendering App.js, should not change

-  #### `package.json` - Defines npm behaviors and packages for the client

#### `server` - Holds the server application

-  #### `config` - This holds our configuration files, like mongoDB uri

-  #### `controllers` - These hold all of the callback functions that each route will call

-  #### `models` - This holds all of our data models

-  #### `routes` - This holds all of our HTTP to URL path associations for each unique url

-  #### `server.js` - Defines npm behaviors and packages for the client

#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README

#### `.gitignore` - Tells git which files to ignore

#### `README` - This file!


## **How To Run**

Create an Atlas URI connection parameter in  `mern/server/config.env`  with your Atlas URI:
```
ATLAS_URI="your mongodb connection string"
PORT=5000
```
#### Create config.env file: server/config/config.env
```
PORT = 4000
DB_URI =
JWT_SECRET =
JWT_EXPIRE =
COOKIE_EXPIRE =```
```
**Start server:**
```
cd mern/server
npm install
npm start
```
**Start Web server**
```
cd mern/client
npm install
npm start
```
  
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs just the client app in development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run dev`

Runs just the server in development mode.<br>

  

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).


To learn React, check out the [React documentation](https://reactjs.org/).