# **Angular Data Table**

![Screenshot](https://raw.githubusercontent.com/DynastyElvis/angular-data-table/237be6f91d629708d62d2638670baa370c6a2e62/angular-data-table/src/assets/Screen%20Shot%202025-03-10%20at%2023.00.45.png)

A clean and modern Angular data table component that fetches data from an API, displays it in a table, and includes features like sorting, filtering, and pagination.

---

## **Table of Contents**
1. [Description](#description)
2. [Setup Instructions](#setup-instructions)
3. [Design Decisions](#design-decisions)
4. [Packages](#packages)
5. [Live Link](#live-link)
6. [Specifications](#specifications)
7. [Testing](#testing)
8. [Known Bugs](#known-bugs)
9. [Support](#support)
10. [Developer](#developer)
11. [License](#license)

---

## **Description**
This project is an Angular-based implementation of a reusable data table component that fetches data from a REST API and displays it in a structured table format. The component includes:

- **Core Features**:
  - Fetching data from an API using Angular's `HttpClient`.
  - Displaying the data in a well-structured HTML table using Angular's `*ngFor` directive.
  - Handling **loading states** to indicate when data is being fetched.
  - Implementing **error handling** to gracefully display error messages if the API request fails.
- **Advanced Features**:
  - **Sorting**: Click on column headers to sort the data.
  - **Filtering**: Use the search input to filter the table rows by `name` or `email`.
  - **Pagination**: Navigate through pages of data using "Previous" and "Next" buttons.
- **Styling**:
  - Clean and modern UI with Montserrat font and Font Awesome icons.
  - Responsive design for better usability.

---

## **Setup Instructions**

### **Prerequisites**
- Node.js (v18 or higher)
- Angular CLI (v17 or higher)
- Git (optional)

### **Setup Commands**
1. Clone the repository:
   ```bash
   git clone https://github.com/DynastyElvis/angular-data-table.git
   cd angular-data-table