# GROWHTX_ASSIGMENT_HIMANSHU
[Video link](https://drive.google.com/file/d/1TlEpcKuxu_7D6-qxZD8Ljs1O53WzVztr/view?usp=sharing)
This project is a backend API for managing users, admins, and assignments with secure JWT-based authentication. The backend is built using Node.js, Express, MongoDB, and other essential libraries.

## Setup Instructions

### 1. Clone the Repository
Clone this project to your local machine:

```bash
git clone <repository-url>
```

### 2. Setup Environment Variables
Create a .env file in the backend folder to store your sensitive keys and configurations. Here are the necessary environment variables:

```bash
PORT=xxxx
MONGO_URI=mongodb://your-mongodb-uri
JWT_SECRET=your-secret-key
```

### 3. Initialize the Project

```bash
npm init -y
```

### 4. Add "type":"module" to "package.json"

```bash
{
  "type": "module",
  "scripts": {
    "start": "nodemon server.js"
  }
}
```
### 5 . INstall Dependencies

```bash
npm i bcrypt body-parser dotenv express jsonwebtoken mongoose
```
These dependencies include:

bcrypt: For password hashing.
body-parser: To parse incoming request bodies.
dotenv: For managing environment variables.
express: The web framework for the backend.
jsonwebtoken: For handling JWT authentication.
mongoose: For interacting with MongoDB.


### 6. Run the server
To start the server, run:
```bash
npm run start
```
This will use nodemon to run the server.js file and automatically restart the server when changes are made.


### 7. Testing with Postman
Once the server is running, you can test the API endpoints using Postman. Here's a quick overview of the available endpoints:

POST /api/users/register: Register a new user.<br>
POST /api/users/login: Login and get a JWT token.<br>
POST /api/admins/register: Register a new admin.<br>
POST /api/admins/login: Admin login and get a JWT token.<br>
GET /api/assignments: Fetch assignments for the logged-in admin.<br>
POST /api/assignments/:id/accept: Accept an assignment.<br>
POST /api/assignments/:id/reject: Reject an assignment.<br>
POST /api/assignments/upload: Upload a new assignment (for users).<br>
Refer to the attached video for detailed steps on testing the API with Postman.<br>



