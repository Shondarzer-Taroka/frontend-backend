# Help Center API

## Description

This project is a RESTful API built using Node.js and Express.js. It allows users to manage "Help Center" cards, which represent different sections of a help center, such as "Branches," "Manage Your Account," and "Manage Billing." Users can create, retrieve, and search for these cards.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/download/) (v14.x or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or cloud setup like MongoDB Atlas)
- A text editor or IDE (e.g., VS Code)

## Setup Instructions

### 1. Clone the 

### 2. Install Dependencies
Navigate to the project directory and install the necessary dependencies:

```bash
git clone https://github.com/Shondarzer-Taroka/frontend-backend.git
cd frontend-backend


2. Install Dependencies
Navigate to the project directory and install the necessary dependencies:

npm install


3. Set Up Environment Variables
Create a .env file in the root of your project directory and add the following environment variables:

USER_ID=your_mongodb_user_id
USER_PASSWORD=your_mongodb_password
PORT=6699 # or any port you prefer


USER_ID: Your MongoDB user ID.
USER_PASSWORD: Your MongoDB password.
PORT: The port number on which the server will run (default is 6699).
Ensure this file is added to your .gitignore to prevent it from being committed to version control, as it contains sensitive information.


4. Start the MongoDB Server
Ensure your MongoDB server is running. If you're using MongoDB Atlas (cloud), you can skip this step.

5. Run the Server
Start the Node.js server with the following command:

npm start
