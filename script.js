

function drawMarker(e){
    e.target.style.backgroundColor = `black`;
}

function drawPencil(e){
    let bgcolor = window.getComputedStyle(e.target).backgroundColor;
    let rgba = bgcolor.substring(bgcolor.indexOf('(') +1, bgcolor.length -1).split(', ');
    if (rgba[3] === undefined) {
        e.target.style.backgroundColor = `rgb(${+rgba[0] - 23}, ${+rgba[1] - 23}, ${+rgba[2] - 23})`;
    }
    else {
        e.target.style.backgroundColor = `rgba(${+rgba[0] - 23}, ${+rgba[1] - 23}, ${+rgba[2] - 23}, ${+rgba[3] + 0.1})`;
    }
}

function generateRandomRGBA(){
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    let a = Math.random();

    return [r, g, b, a]
}
function drawRainbow(e){
    let rgba = generateRandomRGBA();
    e.target.style.backgroundColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${+rgba[3]})`;
}

function hoverDraw(){
    document.querySelectorAll('.grid').forEach(
        grid => ['mouseover', 'click'].forEach(
            touch => grid.addEventListener(touch, (e) => {
                if (drawStyle === 'Marker') drawMarker(e);
                else if (drawStyle === 'Pencil') drawPencil(e);
                else if (drawStyle === 'Rainbow') drawRainbow(e);
                else marker(e);
            })
        )
    )
}

function resetColor() {
    document.querySelectorAll('.grid').forEach(
        grid => grid.style.backgroundColor = "transparent"
    )
}

function setGrid(size) {
    document.querySelector('.grid-board').textContent = '';
    let gridSize = (size===undefined) ? prompt("Please enter the desired grid size.") : 16;
    if (gridSize > 100) {alert("Error: input should not be more than 100"); gridSize = 16};
    if (gridSize < 0) {alert("Error: input should not be less than 0"); gridSize = 16};
    if (gridSize === "") {alert("Error: input is empty"); gridSize = 16};
    if (isNaN(gridSize) || isNaN(parseInt(gridSize))) {alert("Error: input is not a valid number"); gridSize = 16};

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
    hoverDraw();
}

const container = document.createElement('div');
container.classList.add('grid-board');
document.body.appendChild(container);
setGrid(16);
let drawStyle = 'Marker';

document.querySelector('button.setGrid').addEventListener('click', () => {setGrid()});
document.querySelector('button.clear').addEventListener('click', () => {resetColor()});
document.querySelectorAll('button.drawStyle').forEach(
    button => button.addEventListener('click', (e) => {
        drawStyle = e.target.textContent;
    })
)