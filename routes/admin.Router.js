const Admin = require('./../model/admin.model')
const { createAdmin} = require('../controller/admin.Controller')()
const express = require('express')
const { Router } = express

//problem with the router
//that is what is breaking the code

const adminRouter = Router()

adminRouter.route('/new/admin').post(createAdmin)


module.exports = adminRouter