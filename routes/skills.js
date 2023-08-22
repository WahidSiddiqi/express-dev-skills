var express = require('express');
var methodOverride = require('method-override');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

router.use(express.urlencoded())

// convert requests method from POST to DELETE if path has '_method=Delete'
router.use(methodOverride('_method'))

// GET /skills
router.get('/', skillsCtrl.index);

router.delete('/delete', skillsCtrl.delete_skill);

router.get('/add_skill', skillsCtrl.show_add)

router.post('/add_skill', skillsCtrl.add_skill)

router.get('/:id', skillsCtrl.show);




module.exports = router;
