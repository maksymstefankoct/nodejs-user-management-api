// nodejs-app/db/dbOperations.js

const { query } = require('./dbMiddleware');

const getUsers = async () => {
    return query('SELECT * FROM users');
};

const getUserById = async (userId) => {
    return query('SELECT * FROM users WHERE id = $1', [userId]);
};

const createUser = async (userData) => {
    const { first_name, last_name, phone } = userData;
    return query('INSERT INTO users (first_name, last_name, phone) VALUES ($1, $2, $3) RETURNING *', [first_name, last_name, phone]);
};

const updateUser = async (userId, userData) => {
    const { first_name, last_name, phone } = userData;
    return query('UPDATE users SET first_name = $1, last_name = $2, phone = $3 WHERE id = $4 RETURNING *', [first_name, last_name, phone, userId]);
};

const deleteUser = async (userId) => {
    return query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
