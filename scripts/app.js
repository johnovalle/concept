//main app file
var canvas = document.getElementById('canvas');
canvas.width = maps.levels[0][0].length * tileList.size * 4;
canvas.height = maps.levels[0].length * tileList.size * 4;
var context = canvas.getContext('2d');
//load assets
//define game states
var game = {
    sprites: [],
    assetsLoaded: 0,
    assetsToLoad: [],
    state: gameStates.loading,
    currentMap: 0,
    avatar: null,
    wall: [],
    bomb: [],
    bombsDefused: 0,
    playing: function(){
        checkPlayerMove();
        updateSpritePositions();
        checkBoundries();
        for(var i = 0; i<game.wall.length; i++){
            blockRectangle(game.avatar,game.wall[i]);
        }
        for(var i = 0; i < game.bomb.length; i++){
            if(hitTestCircle(game.avatar, game.bomb[i]) && game.bomb[i].visible){
                game.bomb[i].visible = false;
                game.bombsDefused++;
            }
        }
        if(game.bombsDefused === game.bomb.length){
            game.state = gameStates.gameOver;
        }

        render(this.sprites, context);
    },
    createMap: function(map){
        buildMap(map,tileList, image, this.sprites);
    },
    gameOver: function(){
        console.log("game over man...");
    }
};

var image = new Image();
image.src = "images/tilesheet.png";
game.assetsToLoad.push(image);
image.addEventListener('load', function(){
    console.log("here");
    loadHandler(game, gameStates);
});

function checkPlayerMove(){
    if(keyMap.up && !keyMap.down){
        game.avatar.vy = -4;
    }
    if(keyMap.down && !keyMap.up){
        game.avatar.vy = 4;
    }
    if(keyMap.up === keyMap.down){
        game.avatar.vy = 0;
    }
    if(keyMap.left && !keyMap.right){
        game.avatar.vx = -4;
    }
    if(keyMap.right && !keyMap.left){
        game.avatar.vx = 4;
    }
    if(keyMap.left === keyMap.right){
        game.avatar.vx = 0;
    }
}
function updateSpritePositions(){
    for(var i = 0; i < game.sprites.length; i++){
        var sprite = game.sprites[i];
        sprite.x += sprite.vx;
        sprite.y += sprite.vy;
    }
}
function checkBoundries(){
    for(var i = 0; i < game.sprites.length; i++){
        var sprite = game.sprites[i];
        if(sprite.x < 0){
            sprite.x = 0;
        }
        else if(sprite.x > canvas.width - sprite.width){
            sprite.x = canvas.width - sprite.width;
        }

        if(sprite.y < 0){
            sprite.y = 0;
        }
        else if(sprite.y > canvas.height - sprite.height){
            sprite.y = canvas.height - sprite.height;
        }
    }
}
window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);

function update(){
    requestAnimationFrame(update, canvas);
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
