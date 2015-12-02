var requestAnimationFrame =  
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
          return setTimeout(callback, 1);
        };

var randomPoint = Math.floor(Math.random() * 500)


paper.install(window);


var game = {

	setupMissiles : function() {

	},

	newMissile : function() {
		var missile = new Path();
		var canvasWidth = $('canvas').width();
		var canvasHeight = $('canvas').height();
		var xCoordStart = Math.floor((Math.random() * canvasWidth) + 1)
		var xCoordEnd = Math.floor((Math.random() * canvasWidth) + 1)
		var	 yCoord = Math.floor((Math.random() * canvasHeight) + 1)
		var speed = 500;

		missile.strokeColor = 'red';
		
		missile.add(new Point(xCoordStart, 0), new Point(xCoordStart, 0));
		missile.target = new Point(xCoordEnd, canvasHeight);
		missile.velocity = new Point((xCoordEnd - xCoordStart)/speed, (canvasHeight - 0)/speed);

		paper.view.onFrame = function onFrame(event) {
		missile.lastSegment.point.x += missile.velocity.x;
		missile.lastSegment.point.y += missile.velocity.y;
		paper.view.draw();
		};
	}
}

$( function() {


	paper.setup( $("canvas")[0]);

	var base = new Rectangle;

	game.newMissile();

}) ;


