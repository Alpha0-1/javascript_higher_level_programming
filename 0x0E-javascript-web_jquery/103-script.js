/**
 * File: 103-script.js
 * Purpose: Fetch translation on button click
 * Notes: Loads Spanish greeting only when button is clicked.
 */
$(document).ready(function() {
    $('#translateBtn').on('click', function() {
        $.get(' https://hellosalut.stefanbohacek.dev/?lang=es', function(data) {
            $('#spanishGreeting').text(data.hello);
        });
    });
});
