// Convention is to name the model in uppercase and singular
const Skill = require('../models/skill');


function index(req, res) {
    // response.render
    // takes a template file as the first parameter
    // takes data as the second parameter, 
    //generates html, and sends it in the response.
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    console.log('req.params', req.params);
    /* {}

    */
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    });
}

// get request to render the add skill form
function show_add(req, res) {
    res.render('skills/add');
}

// handle the post request for the form
function add_skill(req, res) {
    // add the new skill to database
    Skill.addOne(req.body.skillDescription)
    // redirect to
    res.redirect('/skills')
}

function delete_skill(req, res) {
    // delete the new skill to database
    Skill.deleteOne(req.body.id)
    // redirect to
    res.redirect('/skills')
}

module.exports = {
    index,
    show,
    show_add,
    add_skill,
    delete_skill
};
