const express = require('express');
const router = express.Router();
const Movie = require('../../models/Movie');

router.get('/', (req,res) => {
         Movie.find()                 
          .then(movies => {           
                 res.json(movies)})           
});

router.post('/',  (req,res) => {
    const newMovie = new Movie ({
      movieName:  req.body.movieName,
      imageBase64: req.body.imageBase64,
      description: req.body.description,
      contentType: req.body.contentType,
      genre:req.body.genre,
      rating: req.body.rating      
     });     
     newMovie.save()        
   .then(res.json(newMovie))
 });

 router.delete('/:id', (req,res) => { 
  Movie.findById(req.params.id)
      .then(movie => movie.remove().then(()=> res.json({success:true})))
      .catch(err => res.status(404).json({success: false}));        
});

module.exports = router;