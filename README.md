# MERN Login System

In this project, created **MERN Stack App with Login System**. 

## Created Functionalities
    - Registration,
    - Login, 
    - Profile, 
    - Reset password routes, 
    - Send Mail from the Node.js backend application.

## Working with the Project
Create two configaration files into the project.
First in the client and second in the server.

In the client Folder create .env file and put this code inside it.

### .env
    REACT_APP_SERVER_DOMAIN='http://localhost:8080'


After that, In the server Folder create .env file and put this code inside it.

### .env
    JWT_SECRET= "<secret>",
    EMAIL="your EMAIL>",
    PASSWORD="your PASSWORD",
    MONGODB_URI="<MONGODB_URI>"

 **Note:** The **MONGODB_URI** is important to work this project.

#### Run client
    - npm start

#### Run server
    - npm run server

Now, create all these variables in the project and make sure you set MONGODB_URI variable.
Otherwise, the project will not work.