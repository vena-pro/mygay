document.onkeydown = checkButton;

let cube = {
    x: 0,
    y: 0,
    id: 'main'
}

function checkButton(e) {

    let k = e || window.event;

    console.log(k);

    if (k.keyCode === 38) {
        // key: "ArrowUp"
        cube.y -= 100;
        render(cube.id, cube.x, cube.y);
    }
    
    else if (k.keyCode === 40) {
        // key: "ArrowDown"
        cube.y += 100;
        render(cube.id, cube.x, cube.y);
    }

    else if (k.keyCode === 37) {
        // key: "ArrowLeft"
        cube.x -= 100;
        render(cube.id, cube.x, cube.y);
    }

    else if (k.keyCode === 39) {
        // key: "ArrowRight"
        cube.x += 100;
        render(cube.id, cube.x, cube.y);
    }
}

function render(id, x, y) {
    document.getElementById(id).style.top = y + 'px';
    document.getElementById(id).style.left = x + 'px';
    document.getElementById(id).style.transition = 'ease' + ' .25s';
}

render(cube.id, cube.x, cube.y);