/**
 * File: 9-script.js
 * Purpose: Fetch translated text from a mock API
 * Notes: Displays translated greeting from external API.
 */
$(document).ready(function() {
    $.get('https://fourtonfish.com/hellosalut/?lang=es', function(data) {
        $('#translatedText').text(data.hello);
    });
});
