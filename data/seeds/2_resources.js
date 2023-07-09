exports.seed = async function (knex) {
    await knex('resources').del()
    await knex('resources').insert([
        {
            resource_name: 'counselors',
            resource_description: 'ask people around for a good advice '
        },
        {
            resource_name: 'web search',
            resource_description: 'ask in the websites such as reddit or google'
        },
        {
            resource_name: 'parents ',
            resource_description: 'ask your parents for good tips'
        }
    ])
}