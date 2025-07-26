# 📇 Contact App

A simple Node.js-based Contact Management Web Application that allows users to view, manage, and store contact information. The app uses Express.js and EJS as its templating engine, and connects to a local database.

## 🚀 Features

- Add, view, and manage contact information.
- Contact fields: First Name, Last Name, Email, Phone, Address.
- Server-rendered UI using EJS templates.
- Static assets support (CSS/JS).
- Simple and easy-to-understand codebase.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Database**: (likely MongoDB or similar; exact DB not confirmed)
- **Others**: dotenv for environment configuration

## 📁 Project Structure

contact-app/
├── config/
│ └── database.js # Database connection logic
├── routes/
│ └── contact.routes.js # Route definitions
├── views/ # EJS templates
├── public/ # Static assets (CSS/JS/images)
├── index.js # Main entry point
├── .env # Environment variables
└── package.json # Project metadata and dependencies



## 🧑‍💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) package manager
- MongoDB or compatible database if needed

### Installation

1. Clone the repository or download the ZIP.

2. Install dependencies:

```bash
npm install

3. Create a .env file in the root directory and define the following (example):

PORT=3000
DB_URL=mongodb://localhost:27017/your-db-name

4. Start the application:

npm start

5. Visit http://localhost:3000 in your browser.
