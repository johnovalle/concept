//main app file
var canvas = document.getElementById('#canvas');
var context = canvas.getContext('2d');
//load assets
var assetsLoaded = 0;
var assetsToLoad = [];
var sprites = [];

var image = new Image();
image.src = "../imgs/spritesheet.png";
image.addEventListener('load', loadHandler);


//define game states
var game = {
    state: gameStates.loading,
    playing: function(){},
    buildMap: function(){},
    gameOver: function(){}
};

function update(){
    requestAnimationFrame(update);
    switch(game.state){
        case gameStates.loading:
            console.log("Loading...");
            break;
        case gameStates.buildingMap:
            game.buildMap(); //pass the map
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
