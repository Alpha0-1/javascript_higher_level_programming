/**
 * File: 101-script.js
 * Purpose: Add and remove elements dynamically
 * Notes: Demonstrates adding and removing list items.
 */
$(document).ready(function() {
    let count = 1;

    $('#addBtn').on('click', function() {
        $('#dynamicList').append(`<li>Item ${count++}</li>`);
    });

    $('#removeBtn').on('click', function() {
        $('#dynamicList li:last-child').remove();
    });
});
