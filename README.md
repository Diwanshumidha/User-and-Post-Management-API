# User and Post Management API

The User and Post Management API is a robust application programming interface (API) that enables user registration, authentication, authorization, and post management using Prisma, MongoDB, and authentication mechanisms. This README file provides an overview of the API's features, installation instructions, and usage guidelines.

## Features

- User Management: Allows users to register, update their profile, and delete their accounts securely.
- Authentication and Authorization: Implements a secure authentication system using JSON Web Tokens (JWT) and role-based authorization controls.
- Post Creation and Retrieval: Enables users to create new posts and retrieve posts based on various parameters.
- Prisma Integration: Utilizes Prisma as an object-relational mapping (ORM) tool for simplified database interactions.
- Scalability and Performance: Takes advantage of MongoDB's scalability features to handle large user bases and data volumes.
- Secure Data Storage: Safely stores user information by hashing and salting passwords before storing them in the MongoDB database.
- Error Handling and Validation: Implements robust error handling and input validation mechanisms to enhance security.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/Diwanshumidha/User-and-Post-Management-API
cd user-post-management-api
```

2. Install dependencies::

```shell
npm install

```

3. Set up the environment variables:

Create a .env file in the root directory and provide the following environment variables:
```shell
# MongoDB connection string
MONGODB_URL=<mongodb_connection_url>

# JWT secret for token generation
JWT_SECRET=<jwt_secret_key>

```

4. Run The Server

```shell
npm run dev
```


## Usage

Once the API server is up and running, you can access the API endpoints using tools like cURL or Postman. Here are some example requests:

- **User Registration**: `POST /api/signup`
  - Request body: `{ "email": "Temp@gmail.com", "password": "password123", name:"Ajay" }`

- **User Login**: `POST /api/login`
  - Request body: `{ "username": "example_user", "password": "password123" }`

- **Create Post**: `POST /api/post/create/:id`
  - Request body: `{ "title": "New Post", "body": "Lorem ipsum dolor sit amet.",slug:'', authorId:'' }`


Refer to the API documentation or explore the codebase for additional endpoint details and their respective request/response formats.

## Contributing

Contributions are welcome! If you encounter any bugs, have suggestions, or would like to add new features, please open an issue or submit a pull request. Make sure to adhere to the project's code style and guidelines.

## License

This project is licensed under the [MIT License](LICENSE).


