
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>
nemesis-update-status
</h1>
<h3>◦ Nemesis: Tracking Progress for Seamless Updates!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style&logo=Jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style&logo=Nodemon&logoColor=white" alt="Nodemon" />
<img src="https://img.shields.io/badge/MySQL-4479A1.svg?style&logo=MySQL&logoColor=white" alt="MySQL" />
<img src="https://img.shields.io/badge/MariaDB-003545.svg?style&logo=MariaDB&logoColor=white" alt="MariaDB" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>

![GitHub top language](https://img.shields.io/github/languages/top/chmenegatti/nemesis-update-status.git?style&color=5D6D7E)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/chmenegatti/nemesis-update-status.git?style&color=5D6D7E)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/chmenegatti/nemesis-update-status.git?style&color=5D6D7E)
![GitHub license](https://img.shields.io/github/license/chmenegatti/nemesis-update-status.git?style&color=5D6D7E)
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The project is a server-side application built using Express.js framework and Knex.js library. Its main functionalities include fetching data by ID from a MySQL database, updating the status and error fields of specific IDs in the database, and logging errors and messages using the Winston library. The purpose of the project is to provide a robust and efficient way to retrieve and update data in a database, while also providing effective logging capabilities for error tracking and debugging. The value proposition of the project lies in its simplicity, scalability, and reliability, making it a valuable tool for managing and monitoring data updates in a production environment.

---

## ⚙️ Features

| Feature                | Description                                                                                                                              |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| **⚙️ Architecture**    | The system follows a typical server-client architecture. It uses Express as the server framework and handles JSON requests with defined routes. The system leverages a modular architecture for easier code maintenance and scalability.                                                                                                                      |
| **📖 Documentation**   | The codebase lacks explicit documentation except for some inline comments. The absence of comprehensive documentation may make it difficult for new developers to understand the system quickly. Improving documentation would enhance code maintainability and collaboration.                                                                     |
| **🔗 Dependencies**    | The codebase relies on several external libraries such as Express.js for the server framework, Knex for database connection and queries, and Winston for logging. These libraries enhance productivity and provide robustness out of the box. However, the project's README file could provide a complete list of dependencies. |
| **🧩 Modularity**      | The system demonstrates a good level of modularity by organizing the codebase into separate files for each component/functionality, such as controllers, services, database connections, and routes. This modular structure helps in code reuse, maintainability, and easier testing.                                                                       |
| **✔️ Testing**         | The project includes some unit tests for the `GetDataService` class using mocked dependencies. However, testing coverage of other components, such as controllers and routes, is missing. Expanding the test coverage and integrating continuous integration tools would enhance the project's stability and reliability.                          |
| **⚡️ Performance**     | It is challenging to evaluate the system's performance without additional information or benchmarking results. However, the use of a database connection pool with Knex and the Express.js framework generally contribute to good performance and efficient resource usage.                                                       |
| **🔐 Security**        | The codebase lacks explicit implementation of security measures, such as input validation or authentication and authorization mechanisms. To ensure data security and maintain functionality, implementing these security measures would be essential.                                             |
| **🔀 Version Control** | The repository follows best practices by utilizing Git for version control. However, no details are provided regarding branching strategies, release management, or issue tracking. Adopting a clear version control workflow and documenting it would improve collaboration and code review processes.               |
| **🔌 Integrations**    | The system does not have direct integration with external services or systems in the available codebase. However, it can easily interact with various databases and services by leveraging the Knex library and making appropriate modifications in the code.                                          |
| **📶 Scalability**     | The system's modularity and use of a central database connection ensure a solid foundation for scalability. By decoupling components and utilizing connection pooling, the system can adequately handle increased load and future growth.                                                     |

---


## 📂 Project Structure


```bash
repo
├── index.js
├── package.json
└── src
    ├── controller
    │   └── dataController.js
    ├── database
    │   ├── db.js
    │   └── query.js
    ├── logger
    │   └── logger.js
    ├── routes
    │   └── routes.js
    └── service
        ├── getDataService.js
        ├── getDataService.test.js
        └── updateDataService.js

7 directories, 10 files
```

---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                    | Summary                                                                                                                                                                                                                                                                  |
| ---                                                                                     | ---                                                                                                                                                                                                                                                                      |
| [index.js](https://github.com/chmenegatti/nemesis-update-status.git/blob/main/index.js) | This code snippet sets up a server using the Express framework. It listens on a specified port or defaults to port 3000. It handles JSON requests and routes them to the defined routes file. The server starts and logs a message indicating the port it is running on. |

</details>

<details closed><summary>Controller</summary>

| File                                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                        |
| [dataController.js](https://github.com/chmenegatti/nemesis-update-status.git/blob/main/src/controller/dataController.js) | The code snippet defines a dataController class that exports two methods: getById and update. getById fetches data from a specified table using its id, while update updates the status and error fields of a specified id in a given table. Validation checks are performed before executing the database operations. The code handles error scenarios and returns appropriate responses. |

</details>

<details closed><summary>Logger</summary>

| File                                                                                                 | Summary                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                  | ---                                                                                                                                                                                                                                                                                                       |
| [logger.js](https://github.com/chmenegatti/nemesis-update-status.git/blob/main/src/logger/logger.js) | This code snippet creates a logger using the Winston library. The logger is configured with two transports: one for logging errors to a file called "errors.log" and another for logging messages to a file called "messages.log". The logger is then exported to be used in other parts of the codebase. |

</details>

<details closed><summary>Service</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                                       |
| ---                                                                                                                             | ---                                                                                                                                                                                                                                                           |
| [getDataService.js](https://github.com/chmenegatti/nemesis-update-status.git/blob/main/src/service/getDataService.js)           | The code snippet defines a GetDataService class that provides a method to execute a database query for retrieving data based on a table name and ID. The execute method uses the query module to perform the query and returns the result or throws an error. |
| [getDataService.test.js](https://github.com/chmenegatti/nemesis-update-status.git/blob/main/src/service/getDataService.test.js) | The code snippet tests the functionality of the GetDataService by mocking the'query.get' function. It verifies that executing the service with valid parameters returns the expected data, and throwing an error when the query function rejects.             |
| [updateDataService.js](https://github.com/chmenegatti/nemesis-update-status.git/blob/main/src/service/updateDataService.js)     | This code snippet defines a class named UpdateDataService that has an execute method. This method accepts table name, id, status, and error parameters. It executes an update query using the provided parameters, and returns the result.                    |

</details>

<details closed><summary>Database</summary>

| File                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [db.js](https://github.com/chmenegatti/nemesis-update-status.git/blob/main/src/database/db.js)       | This code snippet initializes a singleton database connection using the Knex library. It connects to a MySQL database using environment variables for the host, user, password, and database name. The `getKnex` method returns the Knex instance, and the `close` method destroys the database connection. This code ensures that there is only one instance of the database connection throughout the application. |
| [query.js](https://github.com/chmenegatti/nemesis-update-status.git/blob/main/src/database/query.js) | The code snippet is a module that provides two core functionalities. 1. The'get' function retrieves a specific record from a given table using the provided id.2. The'update' function updates the'status' and'error' fields of a record in the given table using the provided id.                                                                                                                                   |

</details>

<details closed><summary>Routes</summary>

| File                                                                                                 | Summary                                                                                                                                                                                                                        |
| ---                                                                                                  | ---                                                                                                                                                                                                                            |
| [routes.js](https://github.com/chmenegatti/nemesis-update-status.git/blob/main/src/routes/routes.js) | The provided code snippet sets up a Express router that handles HTTP POST and PATCH requests related to updating the status of data. It associates these requests with corresponding functions from the dataController module. |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
> - `ℹ️ ...`

### 💻 Installation

1. Clone the nemesis-update-status repository:
```sh
git clone https://github.com/chmenegatti/nemesis-update-status.git
```

2. Change to the project directory:
```sh
cd nemesis-update-status
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using nemesis-update-status

```sh
node app.js
```

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Refactor Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
