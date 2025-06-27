/**
 * File: 2-script.js
 * Purpose: Change color on click
 * Notes: Changes the div's background color when clicked.
 */
$(document).ready(function() {
    $('#changeColorBtn').on('click', function() {
        $(this).css('background-color', 'lightblue');
    });
});
