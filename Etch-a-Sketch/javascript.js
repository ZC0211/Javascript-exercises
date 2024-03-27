const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');
let isDrawing = false;

function createGrid(numSquaresPerSide) {
    container.innerHTML = '';
    const totalSquare = numSquaresPerSide ** 2;
    for (let i = 0; i < totalSquare; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    container.style.width = `${numSquaresPerSide * (960 / 16)}px`;
    container.style.height = `${numSquaresPerSide * (960 / 16)}px`;
}

function resetGrid() {
    let numSquaresPerSide = prompt("Enter the number of squares per side for the new grid (max: 100)");
    numSquaresPerSide = Math.min(Math.max(parseInt(numSquaresPerSide), 1), 100);
    createGrid(numSquaresPerSide);
}

container.addEventListener('mousedown', function() {
    isDrawing = true;
});

container.addEventListener('mouseup', function(){
    isDrawing = false;
});

container.addEventListener('mouseover', function(event) {
    if (isDrawing && event.target.classList.contains('square')) {
        event.target.style.backgroundColor = 'black';
    }
});

createGrid(16);
resetButton.addEventListener('click', resetGrid);