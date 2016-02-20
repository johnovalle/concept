//main app file
var canvas = document.getElementById('canvas');
canvas.width = maps.levels[0][0].length * tileList.size;
canvas.height = maps.levels[0].length * tileList.size;
var context = canvas.getContext('2d');
//load assets
//define game states
var game = {
    sprites: [],
    assetsLoaded: 0,
    assetsToLoad: [],
    state: gameStates.loading,
    currentMap: 0,
    playing: function(){
        render(this.sprites, context);
    },
    createMap: function(map){
        buildMap(map,tileList, image, this.sprites);
    },
    gameOver: function(){}
};

var image = new Image();
image.src = "images/timeBombPanic.png";
game.assetsToLoad.push(image);
image.addEventListener('load', function(){
    console.log("here");
    loadHandler(game, gameStates);
});




function update(){
    requestAnimationFrame(update);
    switch(game.state){
        case gameStates.loading:
            console.log("Loading...");
            break;
        case gameStates.buildingMap:
            game.createMap(maps.levels[game.currentMap]); //pass the map
            game.createMap(maps.objects[game.currentMap]);
            game.state = gameStates.playing;
            break;
        case gameStates.playing:
            game.playing();
            break;
        case gameStates.gameOver:
            game.gameOver();
            break;
    }
}

update();
