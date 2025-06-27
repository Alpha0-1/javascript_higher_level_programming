/**
 * File: 102-script.js
 * Purpose: Fetch and display greeting from API
 * Notes: Fetches a greeting and inserts into page.
 */
$(document).ready(function() {
    $.get(' https://hellosalut.stefanbohacek.dev/?lang=en', function(data) {
        $('#greeting').text(data.hello);
    });
});
