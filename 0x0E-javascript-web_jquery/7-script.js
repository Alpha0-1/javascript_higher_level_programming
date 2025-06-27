/**
 * File: 7-script.js
 * Purpose: Fetch Star Wars character name via API
 * Notes: Uses SWAPI to fetch and display character name.
 */
$(document).ready(function() {
    $.get('https://swapi.dev/api/people/1/ ', function(data) {
        $('#charName').text(data.name);
    });
});
