//asset loader
function loadHandler(game, stateMap){
    game.assetsLoaded++;
    if(game.assetsToLoad.length === game.assetsLoaded){
        console.log("all assets loaded");
        game.state = stateMap.buildingMap;
    }
}