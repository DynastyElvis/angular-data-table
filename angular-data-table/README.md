# Angular Data Table Component

## Overview
This project is an Angular-based data table component that fetches data from an API and displays it in a well-structured table. It includes loading states, error handling, and additional functionalities such as sorting and filtering.

## Screenshot
![Project Screenshot](https://raw.githubusercontent.com/DynastyElvis/angular-data-table/237be6f91d629708d62d2638670baa370c6a2e62/angular-data-table/src/assets/Screen%20Shot%202025-03-10%20at%2023.00.45.png)

## Live Link
[Live Demo](https://dynastyelvis.github.io/angular-data-table/)

---

## Setup Instructions
### Prerequisites
- Node.js (v20.17.0 or higher recommended)
- Angular CLI
- A modern web browser

### Installation
```sh
# Clone the repository
git clone https://github.com/DynastyElvis/angular-data-table.git
cd angular-data-table

# Install dependencies
npm install

# Serve the application
ng serve --open
```

---

## Features
- Fetches data from an API using Angular's `HttpClientModule`
- Displays data in a well-structured table using `*ngFor`
- Implements loading and error handling states
- Basic styling for readability
- Uses Angular services for API communication
- **Bonus Features:**
  - Sorting by table columns
  - Filtering capability
  - Pagination / "Load More" functionality

---

## Navigation
- [Go Back to the Top](#angular-data-table-component)

---

## Specifications
### **Behavior**
- Fetches and displays API data in a structured format
- Shows a loading state while fetching data
- Displays an error message if data fetching fails

### **Input**
- API endpoint URL
- Optional filters and sorting parameters

### **Output**
- A populated data table with sorting and filtering options
- Error messages if the API request fails

---

## Testing
Run unit tests using:
```sh
ng test
```
Run end-to-end tests using:
```sh
ng e2e
```

---

## Packages Used
- Angular (latest version)
- Angular Material (for UI components)
- RxJS (for handling async operations)

---

## Version
- Angular Version: 17+

---

## Known Bugs
- No known bugs. If found, please report via email.

---

## Support
For any issues or inquiries, contact:
- **Email:** Kipkemoilvs@gmail.com
- **Developer:** Kipkemoi Elvis  
  - [LinkedIn](https://www.linkedin.com/in/elvis-kipkemoi-aa3548209/)  
  - [Portfolio](https://portfolio-elvis.vercel.app/)

---

## License
[MIT License](LICENSE)

