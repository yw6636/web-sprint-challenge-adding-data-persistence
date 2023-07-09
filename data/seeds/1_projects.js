exports.seed = async function (knex) {
    await knex('projects').del()
    await knex('projects').insert([
        {
            project_name: 'Pursue Happiness',
            project_description: 'Always be grateful for what you have',
            project_completed: true
        },
        {
            project_name: 'Become famous',
            project_description: 'Socialize and get out of your comfort zone',
            project_completed: false
        }
    ])
}