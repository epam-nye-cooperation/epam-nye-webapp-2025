// Import necessary modules from the Node.js and NPM ecosystem
import express from 'express'; // Express framework for handling HTTP requests
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger_output.json' with { type: 'json' }; 

const app = express();  // Create an instance of an express application

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Serve the Swagger documentation using the swagger-ui-express middleware path: localhost:{PORT}/api-doc
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Example data: A simple array to act as a database substitute
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];

app.get('/', (req, res) => {
    res.redirect('/api-doc');  // Redirects users to the Swagger documentation page
});

// GET route to retrieve all users
app.get('/users', (req, res) => {
    res.send(users);
});

// GET route to retrieve a specific user by ID
app.get('/users/:id', (req, res) => {
    // Extract the ID from the route parameter and find the corresponding user
    const user = users.find(user => user.id === parseInt(req.params.id));
    
    if (!user) {
        // If the user is not found, send a 404 response
        return res.status(404).send({ message: 'User not found' });
    }
    
    res.send(user);
});

// POST route to create a new user
app.post('/users', (req, res) => {
    // Extract name and email from request body
    const { name, email } = req.body;

    if(!name || !email) {
        // If name or email is missing, send a 400 Bad Request status
        return res.status(400).send({ message: 'Name and email are required' });
    }

    const newUser = { id: users.length + 1, name, email };
    // Add the newly created user to our users 'database'
    users.push(newUser);
    // Send a 201 success status with the new user data
    res.status(201).send(newUser);
});

// PATCH route to update a user's information
app.patch('/users/:id', (req, res) => {
    // Find the user that matches the ID from the route parameter
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        // If the user isn't found, send a 404 response
        return res.status(404).send({ message: 'User not found' });
    }
    
    // Update the user's info if provided in the request, otherwise maintain original
    const { name, email } = req.body;
    user.name = name ?? user.name;
    user.email = email ?? user.email;

    // Send a 200 success status with the updated user data
    res.status(200).send(user);
});

// DELETE route to remove a user from the 'database'
app.delete('/users/:id', (req, res) => {
    // Find the index of the user in the array
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) {
        // If no user is found with the ID, send a 404 status
        return res.status(404).send({ message: 'User not found' });
    }
    // Remove the user by their index
    users.splice(index, 1);
    // Send a 204 No Content status to indicate successful deletion
    res.status(204).send();
});

const PORT = process.env.PORT || 3000;
// Start listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log port to console for convenience
});