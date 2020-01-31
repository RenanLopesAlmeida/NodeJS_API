# This Project is about creating a NodeJS API using mongoDB to a blog system, where you can create, read, update and delete a post.

Before we get into how it is working, you'd like to know what were used to create this project. Some of libraries that I am using are:

- Express (^4.17.1)
- Mongoose (^5.8.9)
- slug (^2.1.0)
- cors (^2.8.5)

## Getting Started

All the things you may change are inside of src folder. I'm using an adaptive MVC architecture to this project, so the project is divided by Controllers and models. The view will be rendered when you consume an endpoint on a client project.

### System architecture

The app.js file is responsible for set things up in our system, such as using express to configure routes, enable use json, enable cors...

The server.js file is responsible for configure our database connection and it runs the server. To set some information, I created a variable.env file to wrap up sensible information,  such as the current state of our environment, if it is development or in production already, DATABASE information ...

There are a file inside of routes folder to manage the route. Every route needs a controller responsible for that route.

#### Models

I created a model responsible for Post database. One interesting thing is that I did a middleware to make a unique slug according to the title of the post I'm adding to and to make some validations to it. To make it unique, I created a regex based on the slug and to know if there it is another post with the same slug, I will just create the slug and add 1. Ex: a-interesting-post -> a-interesting-post-2

#### Controllers

There's a postController file that has a function corresponding to a specific endpoint that return a json response.