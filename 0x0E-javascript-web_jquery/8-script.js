/**
 * File: 8-script.js
 * Purpose: Fetch and list Star Wars movies
 * Notes: Retrieves and displays a list of movie titles.
 */
$(document).ready(function() {
    $.get('https://swapi.dev/api/films/ ', function(data) {
        data.results.forEach(function(movie) {
            $('#moviesList').append(`<li>${movie.title}</li>`);
        });
    });
});
