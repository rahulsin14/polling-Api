const express = require('express');

const router = express.Router();
const questionController = require('../controllers/question_controller');

const optionController = require('../controllers/option_controller');

router.post('/create',questionController.create);
router.post('/:id/options/create',optionController.create);
router.delete('/:id/delete',questionController.delete);
router.get('/:id',questionController.get);
module.exports = router;