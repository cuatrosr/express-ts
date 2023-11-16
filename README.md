
# Express-Ts 💻️
The backend application developed with Node.js and TypeScript uses MongoDB as the database to manage users, groups, and their relationships. Its main objective is to provide CRUD (Create, Read, Update, Delete) functionalities for users and groups, in addition to handling user authentication and authorization.

## Key Features: 
### Data Models
User: Defines fields such as name, email, password, and their associations with groups.
Group: Describes the structure of groups, including their name and associated users.
### CRUD Functionalities
Users: Enables complete user management, ensuring validations for data integrity.
Groups: Offers similar operations for group management, including manipulation of their associated users.
### Association Management
User-Group Association: Facilitates adding and removing users from specific groups.
### Specific Queries
List of Users in Groups: An endpoint to retrieve the list of users associated with a particular group.
List of Groups per User: Provides a list of groups to which a user is associated.
### Authentication and Authorization
Uses JSON Web Tokens (JWT) for user authentication.
Implements middleware to authorize routes and specific actions, restricting access to authorized roles, such as the superadmin role for user creation.

# Build With 🛠️
<div>
  <img src ="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" title= "HTMLS" alt = "HTML" width ="80" height = "80"/> &nbsp;  
<img src ="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original-wordmark.svg" title= "PYTHONS" alt = "PYTHON" width ="80" height = "80"/> &nbsp; 
  </div>

# Installation
## Prerequisites
Make sure you have MongoDB installed and running on your system.

### Steps
### MongoDB Configuration:
Ensure you have an instance of MongoDB running either locally or in the cloud.
Have user credentials available for accessing MongoDB.

### Installation of Dependencies:
Open your terminal at the root directory of the project.
Run the following command to install project dependencies:
  ## pnpm install
### Database User Configuration:
Access your MongoDB instance and create a user that the application will use to access the database.

### Running the Application:
Once dependencies are installed and the database is configured, start the application by running:
  ## pnpm run dev
This command initiates the backend application's development server.

# Author ✒️

<a href="https://github.com/cuatrosr"> <img src="https://avatars.githubusercontent.com/cuatrosr" alt="Foto de perfil de cuatrosr" width="80" height="80"></a>   <a href="https://github.com/G20-00">  <img src="https://github.com/G20-00.png?size=100" alt="Foto de perfil de G20" width="80" height="80"></a>






