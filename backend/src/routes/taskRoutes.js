const express = require('express');
const router = express.Router();

// GET welcome route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Task Management API!' });
});

module.exports = router;
