# Movie Rental Project 
This application uses React, Redux, MongoDB, express, node.js, axios.
For demonstation purposes I combined the function of adding records to a 
movie database and the rental process although in the real world, these 
functions would not be combined.
The application allows you to upload movie records to a MongoDB database to 
create a movie list.  The movie record includes a movie post image and fields for the movie name,
description, genre,  a selector for rating , ect.  Movie images need to be reduced to 12kb to 
upload.  From  the movie list you can rent movies by clicking the "rent this" button. After a 
movie is rented, the button says "rented" and is disabled.  There is a
cart button in the nav that keeps track of the number of movies rented. click on the cart to 
see your movies listed in the cart. There is a button that can remove the movie from the cart.
In the cart there is a return to movie list button to go back and rent more movies.
You will need to create a mongoDB collection for the movie database and update the keys.js file 

