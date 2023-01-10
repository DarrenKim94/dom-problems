

function showColors() {
    const amount = document.getElementById('select').options.length;
    document.getElementById('p1').innerHTML = 'There are ' + amount + ' colors';
   

    const color = document.getElementById('select');
    let txt = '';
    for(let i = 0; i < color.length; i++) {
        txt = txt + color.options[i].text + ', ';
    }
    document.getElementById('p2').innerHTML = txt;
}