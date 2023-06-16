function createGrid() {
    document.querySelector('.grid-board').textContent = '';
    let gridSize = prompt("Please enter the desired grid size.");
    if (gridSize > 100) {alert("Please enter a number not more than 100."); return}

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < gridSize; i++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            row.appendChild(grid);
        }
        document.querySelector('.grid-board').appendChild(row);
    }
    hoverColor();
}
function hoverColor() {
    document.querySelectorAll('.grid').forEach(
        grid => grid.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
    )
}

function resetColor() {
    document.querySelectorAll('.grid').forEach(
        grid => grid.style.backgroundColor = "transparent"
    )
}


const container = document.createElement('div');
container.classList.add('grid-board');
document.body.appendChild(container);

document.querySelector('button.createGrid').addEventListener('click', () => {
    createGrid();
    console.log("create grid");
})
document.querySelector('button.clear').addEventListener('click', () => {
    resetColor();
    console.log("clear grid");
})