var express = require('express');
var router = express.Router();

/* GET calendar page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('calendar', { title: 'Calendar', today: 'Monday' });
});




module.exports = router;
