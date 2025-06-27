/**
 * File: 0-script.js
 * Purpose: Select an element using jQuery
 * Notes: Demonstrates basic element selection with jQuery.
 */
$(document).ready(function() {
    // Select the element with ID 'target' and store it in a variable
    const $element = $('#target');

    // Add a background color to visually confirm selection
    $element.css('background-color', '#f0f0f0');
});
