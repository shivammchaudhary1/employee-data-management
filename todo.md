📋 To-Do Checklist for Employee Data Management (MongoDB/Mongoose)

1. Project Setup & Initial Backend

- Create project folder (employee-management)
- Setup backend (Node.js + Express)
- Setup frontend (React or Next.js)
- Initialize backend (npm init -y)
- Install backend dependencies: `express`, `cors`, `nodemon`, **`mongoose`**
- Create `server.js` or `app.js` and set up basic Express server.
- **[UPDATE] Connect Express to MongoDB using Mongoose.**

2. MongoDB/Mongoose Model & Schema

- Create an `Employee` Mongoose schema with fields: `name` (String, required), `email` (String, required, unique), and `position` (String, required).
- Compile the schema into a Mongoose Model.

3. Backend API (CRUD Endpoints)
   Goal: Implement the full RESTful API for `/api/employees`

- **[CREATE]** POST `/api/employees`: Create a new employee.
  - Logic: Validate input, create and save new Employee document to MongoDB.
- **[READ All]** GET `/api/employees`: Fetch all employees.
  - Logic: Use Mongoose to find all employees and return the list.
- **[READ One]** GET `/api/employees/:id`: Fetch a single employee by ID.
- **[UPDATE]** PUT/PATCH `/api/employees/:id`: Update an existing employee.
  - Logic: Find by ID, update the fields, and save.
- **[DELETE]** DELETE `/api/employees/:id`: Remove an employee.
  - Logic: Find by ID and remove the document from MongoDB.

4. Backend Polish & Testing

- Implement robust **error handling** for all endpoints (e.g., 404 for not found, 400 for bad requests, 500 for database errors).
- Implement **input validation** for POST/PUT endpoints (e.g., Mongoose schema validation, check for required fields).
- **Test Cases:** Add backend tests (e.g., using Supertest) to verify all 5 CRUD endpoints are working correctly.

5. Frontend: Setup & Display

- Create React/Next.js app (`npx create-react-app frontend` or similar).
- Setup service/utility file for making API calls (e.g., `api.js`).
- **Read:** Fetch the list of employees from the GET `/api/employees` endpoint.
- Display the employee data in a clean, professional table or list format.

6. Frontend: Create & Form Handling

- **Create:** Build a form component (`EmployeeForm`) to gather new employee data (name, email, position).
- Implement form submission logic to send a POST request to the backend.
- Upon success, refresh the employee list to show the new entry.

7. Frontend: Edit & Delete

- **Delete:** Add a "Delete" button next to each employee.
- Implement the delete functionality (send a DELETE request to `/api/employees/:id`).
- Upon success, remove the employee from the local state and refresh the list.
- **Edit:** Add an "Edit" button next to each employee.
- **[UPDATE]** Implement the edit flow (e.g., open a modal pre-filled with the employee's data).
- Implement the update functionality (send a PUT/PATCH request to `/api/employees/:id`).

8. Bonus Features ✨

- **Search/Filter:** Add an input bar on the frontend. Implement logic to filter the displayed employee list by name (client-side filtering is fine for this project size).
- **Form Validation:** Implement client-side form validation (e.g., check for empty fields, valid email format) on the create/edit forms.
- Add basic styling and responsive design to ensure the application is usable on different screen sizes.

9. Final Review

- End-to-end test: Create a new employee, verify it appears. Edit the new employee, verify the update. Delete the employee, verify it's removed.
- Confirm that MongoDB is correctly persisting the data.
- Review and refactor code for cleanliness, separation of concerns, and adherence to RESTful principles.
