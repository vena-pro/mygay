document.onkeydown = checkButton;

let cube = {
    x:0,
    y:0,
    width:56,
    height:56,
    transition: .25,
    step: 50,

}

function checkButton(event) {

    if (event.keyCode === 37){
        console.log("ArrowLeft");
        cube.x -= 10
        renderCube(cube.x, cube.y);
    }

    else if (event.keyCode === 39){
        console.log("ArrowRight");
        cube.y -= 10
        renderCube(cube.x, cube.y);
    }

    else if (event.keyCode === 38){
        console.log("ArrowUp");
        cube.x += 10
        renderCube(cube.x, cube.y);
    }

    else if (event.keyCode === 40){
        console.log("ArrowDown");
        cube.y += 10
        renderCube(cube.x, cube.y);
    }
}

function renderCube(x, y) {
    document.getElementById("cube").style.top = y + "px";
    document.getElementById("cube").style.left = x + "px";
}

renderCube(cube.x, cube.y);