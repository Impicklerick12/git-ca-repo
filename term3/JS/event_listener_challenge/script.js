let warning = document.getElementById('warning');
let button = document.getElementById('makeItRed');

button.addEventListener('click', makeRed);

function makeRed(e) {
    console.log(`Event: ${e.type}`);
    e.preventDefault();
    warning.style.backgroundColor = "red";
}
