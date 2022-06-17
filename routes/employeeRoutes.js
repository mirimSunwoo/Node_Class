const express = require('express')
const router = express.Router();

const EmployeeController = require('../controllers/employeeController')

router.get('/showAll',EmployeeController.showAll)
router.get('/showAll',EmployeeController.show)
router.post('/insert',EmployeeController.insert)
router.put('/update',EmployeeController.update)
router.delete('/delete',EmployeeController.destory)

module.exports = router