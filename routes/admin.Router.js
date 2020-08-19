const Admin = require('./../model/admin.model')
const bcrypt = require('bcrypt')
const { createAdmin, admins, adminLogin} = require('../controller/admin.Controller')(Admin, bcrypt)
const express = require('express')
const { Router } = express


const adminRouter = Router()

adminRouter.route('/new/admin').post(createAdmin)

adminRouter.route('/admins').get(admins)
adminRouter.route('/admin/login').post(adminLogin)

module.exports = adminRouter