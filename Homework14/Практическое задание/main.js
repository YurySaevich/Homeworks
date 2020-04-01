var container = document.getElementById('container'),
    firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var ourButton = document.querySelector('button'),
    firstParChildrenLinks1 = firstPar.firstElementChild,
    firstParChildrenLinks2 = firstPar.lastElementChild;
ourButton.addEventListener('click',function(event){
    firstParChildrenLinks1.classList.add('link');
    firstParChildrenLinks2.classList.add('link');
    event.preventDefault();
    },false);


var secondParChild1 = secondPar.firstElementChild;
secondParChild1.addEventListener('click', function(event) {
    event.preventDefault();
    alert(secondParChild1.getAttribute('href'));
}, false);
var secondParChild2 = secondPar.lastElementChild;
secondParChild2.addEventListener('click', function(event) {
    event.preventDefault();
    alert(secondParChild2.getAttribute('href'));
}, false);

