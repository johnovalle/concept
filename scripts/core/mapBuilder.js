//map builder

//needs a map of tiles
function buildMap(map,tileList, sheet, sprites){
    console.log("building map");
	for(var row = 0; row < map.length; row++){
		for(var column = 0; column<map[0].length; column++){
			var cell = map[row][column];
			if(cell !== 0){
				var curTile = makeSprite(sheet, tileList[cell-1]);
				curTile.x = column * tileList.size; //where to get size from
				curTile.y = row * tileList.size; // same
				sprites.push(curTile);
			}
		}
	}
}