

function showColors() {
    // Get the amount of items in the options
    const amount = document.getElementById('select').options.length;
    document.getElementById('p1').innerHTML = 'There are ' + amount + ' colors';
    // Define another variable for just the text in the list
    const color = document.getElementById('select');
    let txt = '';
    // Write for loop to list every color in the list
    for(let i = 0; i < color.length; i++) {
        txt = txt + color.options[i].text + ', ';
    }
    // Display in a seperate paragraph
    document.getElementById('p2').innerHTML = txt;
}