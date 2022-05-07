const express = require('express');

const MovieCtrl = require('../controllers/movie-ctrl'); //call in controller

const router = express.Router();

//coming from exports
router.post('/movie', MovieCtrl.createMovie);
router.put('/movie/:id', MovieCtrl.updateMovie);
router.delete('/movie/:id', MovieCtrl.deleteMovie);
router.get('/movie/:id', MovieCtrl.getMovieById);
router.get('/movies', MovieCtrl.getMovies);

module.exports = router;
