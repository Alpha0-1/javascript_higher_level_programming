/**
 * File: 3-script.js
 * Purpose: Add a class on click
 * Notes: Adds 'highlight' class to button on click.
 */
$(document).ready(function() {
    $('#addClassBtn').on('click', function() {
        $(this).addClass('highlight');
    });
});
