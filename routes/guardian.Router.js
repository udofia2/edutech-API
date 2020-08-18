const Guardian = require('./../model/guardian.model')
const express = require('express')
const { Router } = express

const guardianRouter = Router()

/**
 * @route           /api/v1/guardians
 * @description     All parents
 * @access          Everyone can access
 */

guardianRouter.route('/guardians').get(async (req, res) => {
    try {
        const guardian = await Guardian.find()

        res.json(guardian)
    } catch (err) {
        console.error(err)
    }
})


/**
 * @route           /api/v1/guardians
 * @description     All parents
 * @access          Everyone can access
 */
guardianRouter.route('/guardian/:guardianID').get(async (req, res) => {
    try {
        const guardians = await Guardian.findById(req.params.guardianID).populate('student', ['fName', 'lName'])
        res.json(guardians)

    } catch(err) {
        console.error(err)
    }
})
module.exports = guardianRouter