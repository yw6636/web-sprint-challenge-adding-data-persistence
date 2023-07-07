// build your `Project` model here
function getProjectById(project_id) {
    return Promise.resolve(`awesome project with id ${project_id}`)
}
module.exports = { getProjectById }