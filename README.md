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

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/help-center-api.git
cd help-center-api
```

### 2. Install Dependencies
Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root of your project directory and add the following environment variables:

```bash
USER_ID=your_mongodb_user_id
USER_PASSWORD=your_mongodb_password
PORT=6699 # or any port you prefer
```

### 4. Start the MongoDB Server
Ensure your MongoDB server is running. If you're using MongoDB Atlas (cloud), you can skip this step.

### 5. Run the Server
Start the Node.js server with the following command:

```bash
npm start

```

If you want the server to reload automatically when files change, you can use:

```bash
npm run dev
```
### 6. Verify the Setup
Open your browser or use a tool like Postman to test the API by visiting:

```bash
http://localhost:6699
```