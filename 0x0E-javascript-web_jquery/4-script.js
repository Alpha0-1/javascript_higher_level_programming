/**
 * File: 4-script.js
 * Purpose: Toggle a class using jQuery
 * Notes: Toggles 'active' class on button click.
 */
$(document).ready(function() {
    $('#toggleClassBtn').on('click', function() {
        $(this).toggleClass('active');
    });
});
