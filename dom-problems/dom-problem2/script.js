// make a variable to get identify ids and simplify the code 
const para = document.getElementById('p1');
const alpaca = document.getElementById ('image');
const btn = document.getElementById('clickMe');

// use an onclick event for the button 
btn.onclick = function() {
// this variable will get he href link from the 'image' id
    const showLink = alpaca.getAttribute('href');
// when the button is clicked, the actual href will show on the page
    para.innerHTML = showLink;
};




