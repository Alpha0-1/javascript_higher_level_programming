/**
 * File: 5-script.js
 * Purpose: Append a new list item dynamically
 * Notes: Adds a new <li> to the unordered list.
 */
$(document).ready(function() {
    $('#addItemBtn').on('click', function() {
        $('#itemList').append('<li>New Item</li>');
    });
});
