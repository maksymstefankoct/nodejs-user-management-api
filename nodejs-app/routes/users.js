// nodejs-app/routes/users.js

const express = require('express');
const { authenticateApiKey } = require('../auth/apiKeyAuthMiddleware');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../db/dbOperations');

const router = express.Router();

// Apply API key authentication middleware to all endpoints
router.use(authenticateApiKey);

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create user
router.post('/', async (req, res) => {
    const userData = req.body;
    try {
        const newUser = await createUser(userData);
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update user
router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    try {
        const updatedUser = await updateUser(userId, userData);
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(updatedUser);
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete user
router.delete('/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await deleteUser(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(deletedUser);
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
