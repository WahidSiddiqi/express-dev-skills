const skills = [
    { id: 125223, skillDescription: 'Javascript' },
    { id: 127904, skillDescription: 'Ruby' },
    { id: 139608, skillDescription: 'HTML' }
];

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    for (let skill of skills) {

        if (id == skill.id) {
            return skill

        }
    }
}

function addOne(skillDescription) {
    skills.push({
        id: Math.floor(Math.random() * 100000),
        skillDescription
    })
}

function deleteOne(id) {
    // find index of the skill that matches id
    let matching_skill_index = null;
    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];
        console.log({ skill, i, id })
        if (skill.id == id) {
            matching_skill_index = i;
            break;
        }
    }

    console.log(matching_skill_index)


    // remove by index
    skills.splice(matching_skill_index, 1);
    return;
}