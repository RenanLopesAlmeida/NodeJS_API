# This Project is about creating a NodeJS API of a blog system, where you can create, read, update and delete a post.

Before we get into how it is working, you'd like to know what were used to create this project. Some of libraries that I am using are:

- NodeJS
- Express
- MongoDB
- Mongoose
- slug
- cors

## Getting Started

All the things you may change are inside of src folder. I'm using an adaptive MVC architecture to this project, so the project is divided by Controllers and models. The view will be rendered when you consume an endpoint on a client project.

The app.js file is responsible for set things up in our system, such as using express to configure routes, enable use json, enable cors...

The server.js file is responsible for configure our database connection and it runs the server. To set some information, I created a variable.env file to wrap up sensible information,  such as the current state of our environment, if it is development or in production already, DATABASE informations ...

