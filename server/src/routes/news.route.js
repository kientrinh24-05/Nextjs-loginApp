const express = require('express');
const router  = express.Router();

const NewsController = require('../controllers/news.controller');

// Get All News

router.get('/', NewsController.getNews);
module.exports = router;
