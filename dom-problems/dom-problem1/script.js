// Create a basic HTML page with a P element and a button on it.

// Then, write a JavaScript function to set the background color of that paragraph using an "onclick" event added to a button in the UI.

// make a function, get the element by its id.


// creat a variable to shorten the code or to call it back later
const btn = document.getElementById('p1')

// write a function that when the button is clicked, the function happens
btn.onclick = function () {
    btn.style.backgroundColor = 'red'
}
