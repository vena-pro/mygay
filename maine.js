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
    color: 'pink',
    border: 'f5f5f5'
}

renderMap(map);
renderCube(spawnCube(map, cube));