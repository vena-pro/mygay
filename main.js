let game = new Game();

game.initMap();

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

game.pushBot();
game.pushBuff();

renderMap(game.getMap());
renderCube(spawnCube(game.getMap(), cube));
renderBots(game.getBots());
renderBuffs(game.getBuffs());

let tike = setInterval(timeTike, 1000);
