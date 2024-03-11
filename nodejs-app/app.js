// nodejs-app/app.js

const express = require('express');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
