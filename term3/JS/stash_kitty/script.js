function addStash(event) {
    // Your code here
    event.preventDefault();
    // console.log(event.type);

    // set variable to click x position
    let x = event.clientX;
    // set variable to click y position
    let y = event.clientY;
    // set stash varibale to html id
    let stash = document.getElementById('stash-pic');

    // change the css styling to the stash, altering the position according to the click locations
    stash.style.position = "absolute";
    stash.style.left = `${x}px`;
    stash.style.top = `${y}px`;
    // Places stash in position from the top left corner of the image - not ideal //
  }
  
// Add an event listener to the correct DOM node here - using your addStash function, and firing on click.
kitty = document.getElementById('cat-pic');
kitty.addEventListener('click', addStash);

// -------------------------------------------- //

// SOLLUTION ON W3 SCHOOLS - CLEAN DRAGGING //

// Make the DIV element draggable:
// dragElement(document.getElementById("stash-pic"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }