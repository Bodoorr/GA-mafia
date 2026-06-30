# ![MEN Stack CRUD App Lab - Exercise](./assets/hero.png)

## Introduction

In this lab, your challenge is to create a complete full-stack application using Node.js, Express, EJS, and MongoDB. Your application will center around a resource or schema of your choosing, for which you will implement full Create, Read, Update, and Delete (CRUD) functionalities. This is an opportunity to apply your understanding of Mongoose, Express, and EJS to a real-world-like scenario.

## Select your resource

Begin by deciding the type of data you want to manage in your application. Your choice should reflect a real-world entity and can be as diverse as your interests.

Here are some ideas to get you started:

- Blogs
- Cars
- Clothing
- Dogs
- Food
- Planets
- Quotes

Think creatively and choose a resource that you find engaging and challenging.

## Define your schema

Once you have selected your resource, your next step is to define how this data will be structured in a Mongoose Schema. You need to consider what properties your resource will have and what data types these properties will be.

We have provided an example of a `mission` schema for reference:

```javascript
const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
});

const mission = mongoose.model("mission", missionSchema);
module.exports = mission;
```

> 💡 Tip: Keep the data resource name short and singular - something like "skill". Your db will hold many "skills" but the model itself should always represent _one_ of that resource.

## Building Your Application

**Minimum Viable Product (MVP):**

**Your goal is to build an application that allows users to perform complete CRUD operations on your chosen resource through a web interface.**

Approach this task methodically, focusing on one functionality at a time:

1. **Create:** Implement the ability to add new entries to your database.
2. **Read:** Display the data from your database on your application's front end.
3. **Update:** Allow users to modify existing data entries.
4. **Delete:** Give users the ability to remove entries.

**Iterative Testing:** As you build your application, continually test each functionality before you move on to the next. This approach helps you catch issues early and ensures that each part of your application works as intended.

**Focus on Functionality:** While aesthetics are important, prioritize getting the CRUD functionalities working correctly first. You can refine the UI of your app later.

## Getting started

We've provided the steps below as a guide to get you started.

#### 1. Set Up Your project structure

- Initialize your project and install necessary packages (express, mongoose, ejs, etc.).
- Create your `server.js` file.

#### 2. Create the server and test route

- Set up an Express server in your `server.js` file.
- Create a basic `GET` route (like `/test`) to confirm the server is running properly.
- Set up a `views` directory and create a simple landing page to test the route.

#### 3. Define your resource and schema

- Decide on the `model` or resource (e.g., Dogs, Cars, Blogs) you want to manage.
- Create a new file for your Mongoose Schema. Define the schema by deciding on the fields and data types relevant to your resource (String, Number, Boolean, etc.).

#### 4. Establish database connection

- Store your MongoDB connection string in a `.env` file for security.
- Add the code to connect to MongoDB in your `server.js` file.

#### 5. Create routes and views for CRUD operations

- Start with the `New` page:
  - Define a `/new` route in your server file.
  - Then, create a `new.ejs` file inside the `views` directory.
  - Use `res.render()` in the route to display this view.
  - Build out the `view` with the HTML and form needed for creating new items
- Build the `POST` route to handle `CREATE` functionality for data sent from the form `action`
- Repeat this process for each CRUD operation- create corresponding routes in your `server.js` file and views in the `views` directory.
- Be sure you test each route and view in the browser to confirm functionality before moving to the next one.

<br>

Your completed application should have the following RESTful routes:

| HTTP Method | Route              | Action  | Description                              |
| ----------- | ------------------ | ------- | ---------------------------------------- |
| GET         | /missions          | Index   | Displays a list of all missions          |
| GET         | /missions/new      | New     | Shows a form to create a new mission     |
| POST        | /missions          | Create  | Creates a new mission                    |
| GET         | /missions/:id      | Show    | Displays a specific mission by its ID    |
| GET         | /missions/:id/edit | Edit    | Shows a form to edit an existing mission |
| PUT         | /missions/:id      | Update  | Updates a specific mission by its ID     |
| DELETE      | /missions/:id      | Destroy | Deletes a specific mission by its ID     |

<br>

Happy coding!
