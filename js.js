const container = document.querySelector(".container");

let startingBoxes = 256;

for (let i=0; i < startingBoxes; i++) {
    var square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);
}

let btn = document.querySelector('#btn');


btn.addEventListener('click', function (e) {
    let test = document.getElementsByClassName('square');
    let convert = Array.prototype.slice.call(test);
    let numSquares = convert.length;

    for (let i=0; i < numSquares; i++) {
        convert[i].remove()
    }
    startingBoxes = prompt("How many squares per side for a new grid?");
    if (startingBoxes > 0 && startingBoxes<= 100) {
        
        for (let j=0; j < startingBoxes * startingBoxes; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            container.appendChild(square);
            let height = 400/startingBoxes;
            let width = 400/startingBoxes;
            square.style.height = `${height}px`;
            square.style.width = `${width}px`
        }
        let test = document.getElementsByClassName('square');
        let convert = Array.prototype.slice.call(test);
        let numSquares = convert.length;

        try {
            for (let i = 0; i < numSquares; i++) {
                convert[i].addEventListener("mouseover", function (event) {
                event.target.style.background = "black";
            });
        }
        } catch (e) {
            console.log(e);
        }
    }    
});

let test = document.getElementsByClassName('square');
let convert = Array.prototype.slice.call(test);
let numSquares = convert.length;

try {
    for (let i = 0; i < numSquares; i++) {
        convert[i].addEventListener("mouseover", function (event) {
            event.target.style.background = "black";
        });
    }
} catch (e) {
    console.log(e);
}


