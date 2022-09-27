const btn = document.getElementsByClassName('btn');
console.log(btn.value);
var counter = 0;
function increment() {
    alert(`You have bought ${++counter} items`);
}
var cartcounter = 0;
function cart() {
    alert(`You have ${++cartcounter} carts in your list.`);
}
