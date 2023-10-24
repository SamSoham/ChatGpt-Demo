### ChatGpt-Demo
_This project consists of two main folders: "server" for the backend and "client" for the frontend. To get started, follow these steps_

**1.Clone the Repository**: Begin by cloning the repository to your local system.
  ```bash
    git clone https://github.com/SamSoham/ChatGpt-Demo.git
  ```

**2.Setting Up the Server**:
  * Navigate to the "server" folder in one window.
  * Install the required backend dependencies.
    ```bash
      npm install
    ```
  * After installation is complete, add a .env file in server folder.
  * Add port number of your backend **PORT=5000** and OPENAI api key **OPEN_API_KEY=<api_key>**. You can get it from OPENAI api website.
  * Start the backend server
    ```bash
      npm run start
    ```
  * Your backend server will be live at http://localhost:5000.

**3.Setting Up the Client**:
  * In a separate window, navigate to the "client" folder.
  * Install the required frontend dependencies.
    ```bash
      npm install
    ```
  * After the installations are complete, start the frontend server
    ```bash
      npm run dev
    ```
  * Your frontend server will be live at http://localhost:3000.

**4.Access the Application**:
  * Open your web browser and go to http://localhost:3000 to access the application
  * Enter your questions in the input field and click the submit button to interact with the application.

**#Happy Coding**
