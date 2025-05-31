const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes/templates'); // ⬅️ import routes

const app = express();

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use(express.json());

// Prefix all template routes with `/templates`
app.use('/templates', routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
// This is the main server file that sets up the Express server, applies middleware, and mounts the template routes.
// It listens on a specified port and allows CORS for a specific frontend origin.