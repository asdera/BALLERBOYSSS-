Physics(function(world){
var ball = Physics.body('circle', {
    x: 50, // x-coordinate
    y: 30, // y-coordinate
    vx: 0.2, // velocity in x-direction
    vy: 0.01, // velocity in y-direction
    radius: 20
});
// add the circle to the world
world.add( ball );

});
