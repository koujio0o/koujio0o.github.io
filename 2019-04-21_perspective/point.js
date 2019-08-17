var Point  = function(){
	this.x = 0;
	this.y = 0;
	this.rad = 5; //半径
	this.color;	
};


Point.prototype.set = function(x, y, color) {
	this.x = x;
	this.y = y;
	// this.rad = rad;
	this.color = color;	
};

Point.prototype.drawx = function(){
	var shape = new createjs.Shape();
	shape.graphics.beginFill(this.color);
	shape.graphics.drawCircle(this.x, this.y, 7);

	return shape;
};







function CalcIntersectionPoint (pointA,pointB,pointC,pointD) {

		console.log('A > ' + pointB.x + '-' + pointB.y);

        const intersection = {x:0,y:0};

        const dBunbo = (pointB.x - pointA.x) * (pointD.y - pointC.y) - (pointB.y - pointA.y) * (pointD.x - pointC.x);

        if (0 == dBunbo) {  // 平行
            return intersection;
        }

        var vectorAC = {};
        vectorAC.x = pointC.x - pointA.x;
        vectorAC.y = pointC.y - pointA.y;

        var r = ( ( pointD.y - pointC.y ) * vectorAC.x - ( pointD.x - pointC.x ) * vectorAC.y ) / dBunbo;
        var s = ( ( pointB.y - pointA.y ) * vectorAC.x - ( pointB.x - pointA.x ) * vectorAC.y ) / dBunbo;

        var distance = {};
        distance.x = (pointB.x - pointA.x) * r;
        distance.y = (pointB.y - pointA.y) * r;

        intersection.x = Math.round(Number(pointA.x) + Number(distance.x));
        intersection.y = Math.round(Number(pointA.y) + Number(distance.y));

        return intersection;
    }