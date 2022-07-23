let emptyX = 3;
let emptyY = 3;

function moveToEmptyPlace (item){
    const newX = emptyX;
    const newY = emptyY;

    emptyX = item.x;
    emptyY = item.y;

    item.x = newX;
    item.y = newY;
    
    item.style.top = `${newY * 25}%` ;
    item.style.left = `${newX * 25}%`;
}

const items = document.querySelectorAll('.item');

let x = 0;
let y = 0;

for ( let item of items){
 
item.x = x;
item.y = y;

moveToEmptyPlace (item);

x += 1;
if (x > 3){
    y += 1;
    x = 0;
}
item.onclick = () => {

    let dX = Math.abs(item.x - emptyX);
    let dY = Math.abs(item.y - emptyY);
    let distance = dX + dY;

if (distance < 2){
    moveToEmptyPlace(item)}
}

}



