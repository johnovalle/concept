//rendering engine
//depends on sprites array, depends on canvas context
function render(){// should take a camera, sprites and context
	for(var i = 0; i < sprites.length; i++){
		var s = sprites[i];
        context.drawImage(s.image,
            s.sourceX, s.sourceY, s.sourceW, s.sourceH,
            s.x, s.y, s.width, s.height);
	}
}