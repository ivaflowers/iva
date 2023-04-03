console.log('Hello, welcome to my website! Hope you will enjoy exploring it!')

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
 } else {
x.className = 'navtoggle';
 }
}

