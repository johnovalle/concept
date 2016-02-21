//keyboard map
var keyMap = {
    up: false,
    down: false,
    left: false,
    right: false
};
var keyValues = {
    up: 38,
    down: 40,
    left: 37,
    right: 39
};

function keyDownHandler(event){
    if(event.keyCode === keyValues.up){
        keyMap.up = true;
    }
    if(event.keyCode === keyValues.down){
        keyMap.down = true;
    }
    if(event.keyCode === keyValues.left){
        keyMap.left = true;
    }
    if(event.keyCode === keyValues.right){
        keyMap.right = true;
    }
}
function keyUpHandler(event){
    if(event.keyCode === keyValues.up){
        keyMap.up = false;
    }
    if(event.keyCode === keyValues.down){
        keyMap.down = false;
    }
    if(event.keyCode === keyValues.left){
        keyMap.left = false;
    }
    if(event.keyCode === keyValues.right){
        keyMap.right = false;
    }
}