// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')
const { checkProject } = require('./middleware')

router.get('/', async (req, res, next) => {
    const data = await Project.get()
    try {
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})

router.post('/', checkProject , async (req, res, next) => {
    const data = await Project.create(req.body)
    try {
        res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})

// router.get('/:project_id', (req, res, next) => {
//     Project.getProjectById(req.params.project_id)
//         .then(resource => {
//             res.status(200).json(resource)
//         })
//         .catch(next)
// })

// router.use((err, req, res, next) => {   // eslint-disable-line
//     res.status(500).json({
//         customMessage: 'something went wrong inside the project router',
//         message: err.message,
//         stack: err.stack,
//     })
// })

module.exports = router