let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'black'
}

let map = {
    x: 0,
    y: 0,
    width: 500,
    height: 500,
    color: 'yellow',
    border: 'f2f2f2'
}

renderMap(map);

renderCube(cube);