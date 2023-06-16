function hoverColor() {
    document.querySelectorAll('.grid').forEach(
        grid => grid.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
    )
}

const container = document.createElement('div');
container.classList.add('grid-board');
document.body.appendChild(container);
let gridSize = prompt("Please enter the desired grid size.");

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