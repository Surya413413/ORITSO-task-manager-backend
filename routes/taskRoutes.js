const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.post('/', controller.createTask);
router.get('/', controller.getTasks);
router.get('/search', controller.searchTasks);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);
// router.delete("/api/tasks/:id", taskController.deleteTask);

module.exports = router;
