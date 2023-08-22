var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var todosCtrl = require('../controllers/todos');

// All actual paths start with "/todos"

// GET /todos
router.get('/', todosCtrl.index);

router.get('/:farid/:yusuf/:heyo', todosCtrl.show);


module.exports = router;
