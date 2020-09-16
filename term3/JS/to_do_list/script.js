let form = document.querySelector('.add-form')
let items = document.querySelector('.items')

form.addEventListener('submit', addItem);
// button.addEventListener('click', buttonClick)
// itemList = addEventListener('click', removeItem);


function addItem(e) {
    e.preventDefault();
    console.log(`Event: ${e.type}`);

    let newItem = document.getElementById('new-item').value;

    let list = document.createElement('p');

    list.className = "list subtitle";

    list.appendChild(document.createTextNode(newItem));

    let newButton = document.createElement('button');

    newButton.className = "button is-danger";

    newButton.appendChild(document.createTextNode('x'));

    let newCard = document.createElement('div');
    newCard.className = "item card";
    let cardContent = document.createElement('div');
    cardContent.className = "card-content";
    let listMedia = document.createElement('div');
    listMedia.className = "list-media";

    items.appendChild(newCard)
    newCard.appendChild(cardContent);
    cardContent.appendChild(listMedia);
    listMedia.appendChild(list);
    listMedia.appendChild(newButton);

};

function removeItem(e) {
    console.log(e.type)
};

function buttonClick(e) {
    console.log(e.type)
}