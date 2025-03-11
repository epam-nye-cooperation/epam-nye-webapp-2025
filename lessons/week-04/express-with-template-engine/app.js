// Import necessary modules from the Node.js and NPM ecosystem
import express from 'express'; // Express framework for handling HTTP requests
import ejs from 'ejs';

const app = express();  // Create an instance of an express application

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.set('view engine', 'html'); // Set the view engine to use EJS
app.engine('html', ejs.renderFile); // Use EJS to render HTML files

const users = [
    { id : 1 ,name: 'John Doe', email: 'john.doe@gmail.com' },
    { id : 2 ,name: 'Jane Doe', email: 'jane.doe@gmail.com'},
    { id : 3 ,name: 'Jim Doe', email: 'jim.doe@gmail.com'},
]

app.get('/users', function (req, res) {
  res.render('index', {users});
})


app.get('/users/:id', function (req, res) {
    const id = req.params.id;
    const user = users.find(user => user.id === Number(id));
    if(user){
        res.render('user', {user});
    } else {
        res.status(404).send({message: 'User not found'});
    }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})