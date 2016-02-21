//sprite setup

var spriteObject = {
    image: "",
    sourceX: 0,
    sourceY: 0,
    sourceW: 64,
    sourceH: 64,
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    vx: 0,
    vy: 0,
    visible: true,
    rotation: 0,
    //Getters
    centerX: function()
    {
        return this.x + (this.width / 2);
    },
    centerY: function()
    {
        return this.y + (this.height / 2);
    },
    halfWidth: function()
    {
        return this.width / 2;
    },
    halfHeight: function()
    {
        return this.height / 2;
    }
};

function makeSprite(image, template){
    var buildSprite = Object.create(spriteObject);
    buildSprite.image = image;
    buildSprite.sourceX = template.sourceX;
    buildSprite.sourceY = template.sourceY;
    buildSprite.sourceW = template.sourceW;
    buildSprite.sourceH = template.sourceH;

    return buildSprite;
};