document.onkeydown = checkButton;

let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 100,
    color: 'black'
}

let map = {
    width: 500,
    height: 500
}

function checkButton(event) {

    if (event.keyCode === 37) {
        console.log("ArrowLeft");
        if (cube.x > 0) {
            cube.x -= cube.step;
        }
    }

    if (event.keyCode === 38) {
        console.log("ArrowUp");
        if (cube.y > 0) {
            cube.y -= cube.step;
        }
    }

    if (event.keyCode === 39) {
        console.log("ArrowRight");
        if (cube.x < map.width) {
            cube.x += cube.step;
        }
    }

    if (event.keyCode === 40) {
        console.log("ArrowDown");
        if (cube.y < map.height) {
            cube.y += cube.step;
        }
    }

    renderCube(cube);
}

function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' + cube.trnstn + 's';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
}

renderCube(cube);