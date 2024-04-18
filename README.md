# Nodejs Backend API with Mongoose (connx to the MongoDB Atlas Database)

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/)

# Getting started

- On your computer, navigate to a location where you want to clone this repository

- Clone the repository

```
% git clone  https://github.com/<github_username>/<project_name>
```

> Example: https://github.com/agaparkg/nodejs-mongodb-app-complete

- Install dependencies

```
% cd <project_name>

% npm install
```

- Run the project

```
% npm run dev
```

Navigate to `http://localhost:3000/api` to see the output

![home](/images/home.png)

- `GET - /users` route

![users](/images/users.png)

- `GET - /users/:id` route (req.params.id)

![single](/images/single.png)

- Additional routes

  ```
  POST - /users (provide the data in the body)
  DELETE - /users/:id (req.params.id)
  PATCH - /users/:id (req.params.id & provide the data in the body)
  ```

  ### Mongoose References

- Mongoose Quick Start
  [https://mongoosejs.com/docs/index.html](https://mongoosejs.com/docs/index.html)

- Queries
  [https://mongoosejs.com/docs/queries.html](https://mongoosejs.com/docs/queries.html)
