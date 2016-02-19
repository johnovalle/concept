//asset loader
function loadHandler(){
    assetsLoaded++;
    if(assetsToLoad.length === assetsLoaded){
        game.state = gameStates.buildingMap;
    }
}