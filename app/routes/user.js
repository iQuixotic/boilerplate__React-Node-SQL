const router = require('express').Router();
const userController = require('../controllers/userController');

// CRUD for an individual account
// router.route('/:id')
    // .post(userController.create)
    // .get(userController.read)
    // .put(userController.update)
    // .delete(userController.delete)

// dealing with multiple users
router.route('/')    
    .get(userController.read)

// router.route('/account/new')    
//     .put(userController.add)
    
module.exports = router;