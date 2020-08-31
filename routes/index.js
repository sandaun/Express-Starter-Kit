const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'OCC', copyright: '© 2020 OCC' });
});

module.exports = router;
