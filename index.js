let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
  cats.push(name);
}
//
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}
//use spread operator ... to create new arrays that include the original cat
function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}


//reset the cat/array to the original state using beforeEach()
beforeEach(function() {
  cats = ['Milo', 'Otis', 'Garfield'];
});


function appendCat(name){
  return [...cats, name];

}

function prependCat(name){
  return[name, ...cats];

}


cats = appendCat(cats);
console.log(cats); 


cats = prependCat(cats);
console.log(cats);


cats.pop();
console.log(cats);
