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
   
Here’s the **pure Markdown** version of your content, ready to copy and paste into a `README.md` file:

```markdown
## **Install dependencies:**

```bash
npm install
```

---

## **Start the development server:**

```bash
ng serve
```

---

## **Open your browser and navigate to:**

```
http://localhost:4200
```

---

## **Design Decisions**
- **Reusable Component**: The `DataTableComponent` is designed to be reusable and can be easily extended for additional features.
- **Error Handling**: Errors are caught and displayed gracefully, ensuring a good user experience.
- **Styling**: The UI uses a clean and modern design with Montserrat font and Font Awesome icons.
- **Responsive Design**: The table is responsive and works well on both desktop and mobile devices.

---

## **Packages**
- **Angular**: Core framework for building the application.
- **Font Awesome**: For icons (search, sorting arrows).
- **RxJS**: For handling asynchronous data fetching.
- **Angular HttpClient**: For making API requests.

---

## **Live Link**
[View Live Demo](https://angular-data-table-demo.vercel.app)

---

## **Specifications**

### **Behavior**
- Fetches data from an API and displays it in a table.
- Allows sorting by clicking on column headers.
- Filters data using a search input and dropdown.
- Paginates data for better navigation.

### **Input**
- API endpoint: `https://jsonplaceholder.typicode.com/users`
- Search input: Filters by `name` or `email`.
- Dropdown: Filters by `username`.

### **Output**
- Displays a table with `ID`, `Name`, `Email`, and `Username`.
- Shows loading and error states.

---

## **Testing**
- **Manual Testing**:
  - Tested sorting, filtering, and pagination functionality.
  - Verified loading and error states.
- **Unit Testing**:
  - Unit tests can be added using Angular's `TestBed` and `Jasmine`.

---

## **Known Bugs**
- None at the moment. Please report any issues [here](https://github.com/DynastyElvis/angular-data-table/issues).

---

## **Support**
For support, contact:
- **Email**: [kipkemoilvs@gmail.com](mailto:kipkemoilvs@gmail.com)
- **LinkedIn**: [Elvis Kipkemoi](https://www.linkedin.com/in/elvis-kipkemoi-aa3548209/)

---

## **Developer**
- **Name**: Elvis Kipkemoi
- **Portfolio**: [Portfolio](https://portfolio-elvis.vercel.app)
- **LinkedIn**: [Elvis Kipkemoi](https://www.linkedin.com/in/elvis-kipkemoi-aa3548209/)

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Go Back to the Top**
[Back to Top](#angular-data-table)
```

---

### **How to Use**
1. Copy the entire Markdown content above.
2. Paste it into your `README.md` file in the root of your project.
3. Commit and push the changes to your GitHub repository.

Let me know if you need further assistance! 😊
