//map builder

//needs a map of tiles
function buildMap(map,tilelist){
	for(var row = 0, row<map.length; row++){
		for(var column = 0; column<map[0].length; column++){
			var cell = map[row][column];
			if(cell !== 0){
				var curTile = makeSprite(image, tilelist[cell]);
				curTile.x = column * size; //where to get size from
				curTile.y = row * size; // same
				sprites.push(curTile);
			}
		}
	}
}