'use strict';

//get the canvas HTML element (e.g., by id)
var canvas = document.querySelector('#canvas'); 

//the "graphics context"
var brush = canvas.getContext('2d');

// //set color of the "fill" (purple)
// brush.fillStyle = "#39275B"; //css color values

// //draw filled in rectangle
// brush.fillRect(30, 50, 150, 250); 


// //set color of the "outline" (gold)
// brush.strokeStyle = "#C79900";

// //draw outline of rectangle
// brush.strokeRect(30, 50, 150, 250);

// brush.beginPath();//begin a new path
// brush.moveTo(100,100);//move with pen up (teleport!)
// brush.lineTo(200, 200);//move with pen down
// brush.lineTo(170, 400);
// brush.closePath(); //go back to starting point
// brush.stroke(); //show current path on screen (outline)
// brush.fill(); //show current path on screen (filled)

// //drawing a circle!                 //in radians, CCW
// brush.arc(300, 300, 40, 0, 2*Math.PI);
// brush.stroke();
// brush.fill(); //show current path on screen (filled)

function drawFace() {
    brush.fillRect(300, 400, 100, 100);
    brush.fillRect(325,375, 50, 50);
    brush.fillStyle = "yellow";
    brush.beginPath();
    brush.arc(325, 425, 10, 0, 2*Math.PI);
    brush.fill();
    brush.closePath();
    brush.beginPath();
    brush.arc(375, 425, 10, 0, 2*Math.PI);
    brush.closePath();
    brush.fill(); //show current path on screen (filled)
    brush.beginPath();
    brush.arc(350, 450, 10, 0, 1*Math.PI);
    brush.fill(); //show current path on screen (filled)
    brush.closePath();
}
drawFace();

canvas.addEventListener('click', function(event){
    //get location information from event
    console.log(event.offsetX, event.offsetY);

});

var lastLocation = undefined;

canvas.addEventListener('mousedown', function(event){
    //get location information from event
    var input = document.querySelector('input');
    brush.strokeStyle = input.value;
    brush.beginPath();
    brush.arc(event.offsetX, event.offsetY, 20, 0, 2*Math.PI);
    brush.fill();
    console.log(event.offsetX, event.offsetY);
    lastLocation = {x:event.offsetX, y:event.offsetY};
});

canvas.addEventListener('mousemove', function(event){
    if(lastLocation) {
        brush.lineTo(event.offsetX, event.offsetY);
        brush.stroke();
    }
});

canvas.addEventListener('mouseup', function(event) {
    lastLocation = undefined; // No longer pressing
});