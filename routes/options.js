const express = require('express');

const router = express.Router();
const optionController = require('../controllers/option_controller');

router.delete('/:id/delete',optionController.delete);
router.get('/:id/add_vote',optionController.add_vote);
module.exports = router;