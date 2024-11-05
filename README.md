
# Published Link : https://ishaq-weboin-task.netlify.app/


# Student Management Application

A React application to manage students' placements, allowing dynamic addition, removal, and status tracking of students. The app uses Context API for state management, local storage for data persistence, and React Router for navigation.

## Overview

The Student Management Application allows users to add, remove, and track the placement status of students. It provides real-time stats and saves data in `student context` to maintain state across sessions.

---

## Features

- Add, remove, and update student information.
- Track placement status (`placed` or `unplaced`) with real-time updates.
- Persistent data storage using `UseContext`.
- Responsive design for different screen sizes.
- Context API for efficient state management.

---

## Project Structure



---

## Components

### `App.js`

- **Description**: Root component, sets up routing and includes `Navbar`.
- **Functionality**: Wraps the application with `StudentProvider` and defines routes for navigation.

### `Navbar.js`

- **Description**: Navigation bar for the app.
- **Functionality**: Provides links to the Home and Form pages.

### `HomePage.js`

- **Description**: Displays the main dashboard with student stats and list.
- **Functionality**: Fetches and displays total, placed, and unplaced student counts and lists all students.

### `FormPage.js`

- **Description**: Page with a form to add new students.
- **Functionality**: Uses `StudentForm` component to collect student information and add it to the `StudentContext`.

### `StatsSection.js`

- **Description**: Displays real-time stats on students.
- **Functionality**: Fetches stats from `StudentContext` to show total students, placed, and unplaced counts.

### `StudentForm.js`

- **Description**: Form component for adding new students.
- **Functionality**: Gathers student data and updates the context. Fields include:
  - **Name**: Name of the student.
  - **Status**: Dropdown to select either `placed` or `unplaced`.
  - **Submit Button**: Adds the student to the list when clicked.

### `StudentList.js`

- **Description**: Lists all students currently stored in the context.
- **Functionality**: Fetches and displays students from the context. Includes an option to remove a student.

---

## Context

### `StudentContext.js`

- **Description**: Context file for managing the global state of students.
- **Exports**:
  - **`useStudents`**: Custom hook for accessing student-related state and actions.
- **State Variables**:
  - **`students`**: Array of student objects, each containing:
    - `id`
    - `name`
    - `status`
  - **`stats`**: Object containing:
    - `total`: Total number of students.
    - `placed`: Number of students marked as placed.
    - `unplaced`: Number of students not placed.
- **Functions**:
  - **`addStudent`**: Adds a new student to the list and updates `localStorage`.
  - **`removeStudent`**: Removes a student by `id`.
- **Persistence**: Saves students to `localStorage` and loads them on initialization.

---

## Usage

1. **Home Page**:
   - View statistics of total students, placed, and unplaced counts.
   - See the complete list of students.
   - Remove a student by clicking on the delete icon next to their name.

2. **Form Page**:
   - Fill out the form to add a new student.
   - Select the placement status for each student.
   - Submit the form to add the student to the context and update the statistics.

---
