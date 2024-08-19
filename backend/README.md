# Future Skills Help Center API

This project is a RESTful API that allows users to manage "Help Center" cards. These cards represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," and more. The API allows users to create and retrieve these cards.

- [API Live Link](https://future-skills-help-center-api.vercel.app)

## Features

-   **Create a Card:** Add a new card with a title and description.
-   **Get All Cards:** Retrieve a list of all available help center cards.
-   **Get a Specific Card:** Retrieve details of a specific card by its title.

## Installation & Run Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/nazmul-nhb/fullstack-assignment-future-skills.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd fullstack-assignment-future-skills/backend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables:

    - Create a `.env` file in the root of your `backend/` directory.
    - Add the following:

        ```bash
        MONGO_CONNECTION_STRING=<Your MongoDB connection string>
        ```

5. Run the application:

    ```bash
    npm start
    ```

    or

    ```bash
    nodemon index
    ```

    The server should now be running at `http://localhost:5000` or `http://localhost:3000` based on your port settings.

## API Endpoints

### 1. Create a Card

-   **Endpoint:** `POST /cards`
-   **Description:** Creates a new help center card.
-   **Request Body:**

    ```json
    {
    "title": "Branches",
    "description": "Abstract Branches lets you manage, version, and document your designs in one place."
    "link":"https://your-link.com" (optional)
    }
    ```

-   **Response:**

    ```json
    {
    	"success": true,
    	"insertedId": "66c2c0d12955b9aacd6ade0a",
    	"message": "Getting Farted is Saved Successfully!"
    }
    ```

### 2. Get All Cards

-   **Endpoint:** `GET /cards`
-   **Description:** Retrieves all the help center cards.

-   **Response:**

    ```json
    {
    	"success": true,
    	"message": "2 Cards Retrieved Successfully!",
    	"data": [
    		{
    			"title": "Getting Started",
    			"description": "Learn how to get started with our platform.",
    			"link": "https://example.com/getting-started",
    			"id": "1724006079546ejvq831us6y"
    		},
    		{
    			"title": "Account Settings",
    			"description": "Manage your account settings and preferences.",
    			"link": "https://example.com/account-settings",
    			"id": "17240060795468u4kv6t2e4z"
    		}
    	]
    }
    ```

### 3. Get a Specific Card

-   **Endpoint:** `GET /cards/:title`
-   **Description:** Retrieves the details of a specific card by its title.
-   **Response:**

    ```json
    {
    	"title": "Account Settings",
    	"description": "Manage your account settings and preferences.",
    	"link": "https://example.com/account-settings",
    	"id": "17240060795468u4kv6t2e4z"
    }
    ```

## Error Handling

The API handles the following error scenarios:

-   Trying to access a non-existent card.
-   Validation errors for missing or invalid data.
-   Server errors.

## Technologies Used

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   dotenv
-   cors

## Development

For development, the project uses `nodemon` for automatically restarting the server when changes are made.

```bash
nodemon index
```

## License

This project is licensed under the ISC License.

## Author

Nazmul Hassan

## Links

-   [GitHub Repository](https://github.com/nazmul-nhb/fullstack-assignment-future-skills)
