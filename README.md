# Node.js User Management API

This is a simple Node.js application for managing users via a RESTful API.

## Getting Started

Follow these instructions to get the application up and running using Docker and Docker Compose.

### Prerequisites

- Docker installed on your machine

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/maksymstefankoct/nodejs-user-management-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd nodejs-user-management-api
    ```

3. Set up environment variables:

    - Copy the `.env.example` file to `.env` and update the variables if necessary.

4. Start the application:

    ```bash
    docker-compose up
    ```

The application should now be running on `http://localhost:3000`.

## API Usage

### Authentication

All API endpoints require an API key for authentication. Include the API key in the `x-api-key` header of your requests.

### Endpoints

- **GET /users**: Get all users.
- **GET /users/:id**: Get user by ID.
- **POST /users**: Create a new user.
- **PUT /users/:id**: Update an existing user.
- **DELETE /users/:id**: Delete a user.

#### Example Usage

1. Get all users:

    ```bash
    curl -X GET http://localhost:3000/users -H "x-api-key: YOUR_API_KEY"
    ```

2. Get user by ID:

    ```bash
    curl -X GET http://localhost:3000/users/1 -H "x-api-key: YOUR_API_KEY"
    ```

3. Create a new user:

    ```bash
    curl -X POST http://localhost:3000/users -H "x-api-key: YOUR_API_KEY" -H "Content-Type: application/json" -d '{"first_name": "John", "last_name": "Doe", "phone": "1234567890"}'
    ```

4. Update an existing user:

    ```bash
    curl -X PUT http://localhost:3000/users/1 -H "x-api-key: YOUR_API_KEY" -H "Content-Type: application/json" -d '{"first_name": "Jane", "last_name": "Doe", "phone": "9876543210"}'
    ```

5. Delete a user:

    ```bash
    curl -X DELETE http://localhost:3000/users/1 -H "x-api-key: YOUR_API_KEY"
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
