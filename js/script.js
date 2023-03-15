

const shoppingList = ["latte", "pane", "caffe", "gelati"];
const listElem = document.querySelector("ul");

let i = 0; 
while ( i < shoppingList.length){
    listElem.innerHTML +=`<li>${shoppingList[i]}</li>`
    i++;
}

