/**
 * File: 6-script.js
 * Purpose: Change the text of an element
 * Notes: Updates heading text when button is clicked.
 */
$(document).ready(function() {
    $('#changeTextBtn').on('click', function() {
        $('#title').text('Text Changed!');
    });
});
