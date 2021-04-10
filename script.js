document.onkeydown = checkButton;

function checkButton(event) {

    let cubeRight = cube.x + cube.width;
    let cubeBottom = cube.y + cube.height;

    let mapRight = map.x + map.width;
    let mapBottom = map.y + map.height;

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
        if (cubeRight < mapRight) {
            if ((mapRight - cubeRight) < cube.step){
                cube.x += (mapRight - cubeRight);
            }
            else {
            cube.x += cube.step;
            }
        }
    }

    if (event.keyCode === 40) {
        console.log("ArrowDown");
        if (cubeBottom < mapBottom) {
            if ((mapBottom - cubeBottom) < cube.step){
                cube.y += (mapBottom - cubeBottom);
            }
            else {
            cube.y += cube.step;
            }
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

function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.backgroundColor = map.color;
}

function spawnCube (map, cube){
    
    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cube.width;

    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cube.height;
    
    cube.x = math.round(mapMinX + Math.random() * (mapMaxX - mapMinX);
    cube.y = math.round(mapMinY + Math.random() * (mapMaxY - mapMinY);
    
    
    return cube;

}

renderMap(map);