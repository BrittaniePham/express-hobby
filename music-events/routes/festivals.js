var express = require('express');
var router = express.Router();
var Festival = require('../models').Festival;

/* GET festival listings. */
router.get('/', function(req, res) {
  Festival.all({
    order: [
      ['createdAt', 'ASC']
    ]
  })
  .then( function(festivals) {
    return res.render('festivals', { festivals: festivals });
  })
});

/* POST add festival listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  Festival.create({ title: title })
    .then( function() {
      res.redirect('/festivals');
  });
});

// PUT /festivals/7 */
router.put('/:id', function(req, res) {
  Festival.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/festivals');
  })
});

// GET /festivals/9/edit
router.get('/:id/edit', function(req, res) {
  Festival.findById(req.params.id)
    .then( function(festival) {
      return res.render('edit', { festival: festival });
  });
});


// DELETE /festivals/1 */
router.delete('/:id', function(req, res) {
  Festival.findById(req.params.id)
    .then( function(festival) {
      festival.destroy()
    })
    .then( function() {
      return res.redirect('/festivals');
  });
});

module.exports = router;