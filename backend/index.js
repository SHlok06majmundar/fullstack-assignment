const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Import body-parser

const connectToDB=require('./connecToDb');
const regRoutes = require('./Routes/reg');

const app = express();

// Connect to the database
connectToDB();

// Set maximum request body size limit
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Enable CORS
app.use(cors());

// Define routes
app.use('/api/reg', regRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('App is running on port', port);
});
