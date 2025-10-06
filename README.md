# Employee Data Management System (EDM)

A modern, full-stack web application for managing employee data with authentication, built using the MERN stack (MongoDB, Express.js, React, Node.js) with Redux Toolkit for state management and TailwindCSS for styling. This application provides a complete solution for organizations to efficiently manage employee information with secure authentication and role-based access control.

## 🚀 Features

- **User Authentication**

  - Register new account
  - Login with email and password
  - JWT-based authentication
  - Protected routes and API endpoints

- **Employee Management**

  - Create new employee records
  - View list of all employees
  - Update employee information
  - Delete employee records
  - Search employees by name

- **User Interface**
  - Responsive design using TailwindCSS
  - Modern and clean UI
  - Loading states and error handling
  - Modal-based forms for adding/editing
  - Interactive data table

## 🛠️ Tech Stack

### Frontend

- React.js with Vite
- Redux Toolkit for state management
- React Router for navigation
- TailwindCSS for styling

### Backend

- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- Environment variables configuration

## 📦 Project Structure

```
employee-data-management/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── allRoutes/     # Route configurations
│   │   ├── assets/        # Images and static assets
│   │   ├── components/    # Reusable components
│   │   ├── config/        # Frontend configuration
│   │   ├── module/        # Feature modules
│   │   │   ├── auth/      # Authentication components
│   │   │   └── employee/  # Employee management components
│   │   ├── redux/        # Redux state management
│   │   └── pages/        # Page components
│   └── package.json
│
└── server/                # Backend Node.js/Express application
    ├── src/
    │   ├── app/          # Express app configuration
    │   ├── config/       # Backend configuration
    │   ├── controllers/  # Route controllers
    │   ├── middleware/   # Custom middleware
    │   ├── models/       # Mongoose models
    │   └── routes/       # API routes
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14.x
- MongoDB installed and running
- npm or yarn package manager

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/employee-data-management.git
   cd employee-data-management
   \`\`\`

2. Install server dependencies:
   \`\`\`bash
   cd server
   npm install
   \`\`\`

3. Create a .env file in the server directory:
   \`\`\`env
   PORT=8080
   MONGO_URI=mongodb://localhost:27017/employee-db
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=1d
   SALT_ROUNDS=10
   \`\`\`

4. Install client dependencies:
   \`\`\`bash
   cd ../client
   npm install
   \`\`\`

5. Create a .env file in the client directory:
   \`\`\`env
   VITE_FRONTEND_URL=http://localhost:5173
   VITE_BACKEND_URL=http://localhost:8080
   \`\`\`

### Running the Application

1. Start the backend server:
   \`\`\`bash
   cd server
   npm run dev
   \`\`\`

2. Start the frontend development server:
   \`\`\`bash
   cd client
   npm run dev
   \`\`\`

The application will be available at:

- Frontend: http://localhost:5173
- Backend API: http://localhost:8080

## 📝 API Endpoints

### Authentication Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Employee Routes (Protected)

- `POST /api/employees/create` - Create a new employee
- `GET /api/employees/getAll` - Get all employees
- `GET /api/employees/get/:id` - Get employee by ID
- `PUT /api/employees/update/:id` - Update employee
- `DELETE /api/employees/delete/:id` - Delete employee

## 👤 Author

**Shivam Chaudhary**

- Email: shivamchaudhary75@gmail.com
- Phone: +91 9169235786
- Location: Lucknow, Uttar Pradesh, India

## 🧪 Running Tests

### Backend Tests

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Run the test suite:

   ```bash
   npm test
   ```

   For running tests with coverage:

   ```bash
   npm run test:coverage
   ```

### Frontend Tests

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Run the test suite:

   ```bash
   npm test
   ```

   For running tests in watch mode:

   ```bash
   npm run test:watch
   ```

## 🤔 Assumptions and Design Decisions

### Architecture Decisions

1. **MERN Stack**: Chosen for its flexibility, scalability, and the ability to use JavaScript throughout the entire stack.

2. **Redux Toolkit**: Implemented for centralized state management to make the application more maintainable as it scales.

3. **JWT Authentication**: Used for secure, stateless authentication that works well with RESTful APIs.

4. **Modal-Based Forms**: Chosen to improve user experience by keeping users on the same page while performing CRUD operations.

### Security Considerations

1. **Password Hashing**: All passwords are securely hashed using bcrypt before storage.

2. **Protected Routes**: Both frontend and backend routes are protected based on authentication status.

3. **Environment Variables**: Sensitive information is stored in environment variables instead of being hardcoded.

### Future Enhancements

1. **Role-Based Access Control**: Plans to implement different user roles (admin, manager, employee).

2. **Advanced Filtering**: Enhanced search capabilities for employee records.

3. **Data Export**: Functionality to export employee data in various formats (CSV, PDF).

4. **Audit Logging**: Track changes made to employee records for compliance and security.

## 📄 License

This project is licensed under the ISC License.
