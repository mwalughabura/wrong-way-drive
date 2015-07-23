//variables
var carYpos=530;
var carXpos= 500;
var car;
var car2;
var car3;
var car4;
var bg;
var y1=0;
var y1randSpeed;
var y2=0;
var y2randSpeed;
var y3=0;
var y2randSpeed;
var streetlight1;
var y4=0;
var x4=920;
var streetlight2;
var y5=0;
var x5=80;
var streetlight1Ypos=0;
var streetlight2Ypos=0;
var colorAtRedCar = [];
var whiteCar = [];
var appear=150;
var gameover

//canvas 
function setup(){
	createCanvas(1000,600);
	stroke(225,45,0);
 
 //load image background
 bg= loadImage('barabara.png');
	gameover= loadImage('drawing.png');
 //loading sprites
	car = loadImage('ndaiyakusimama.png');
	car2 = loadImage('ndai2.png');
 car3 = loadImage('ndai3.png');
	car4 = loadImage('ndai.png');
 streetlight2 = loadImage('streetlight2.png');
 streetlight1 = loadImage('streetlight1.png');

	//creating random speed
	y1randSpeed = random(6, 8);
	y2randSpeed = random(6, 8);
	y3randSpeed = random(6, 8);
}

function draw(){
oldcarXpos=carXpos;
oldcarYpos=carYpos;
	//background	
	clear();
 background(bg);

	//sprite which is the ball
	image(car,carXpos,carYpos,150,100);

	//the first car and its speed
	image(car4,150,y1,150,100);
 y1+= y1randSpeed
	if (y1 > height){
		y1 = 0
		y1randSpeed = random(7, 10);
	}

	//the second car and its speed
	image(car2,750,y2,150,100);
  y2+= y2randSpeed
	if (y2 > height){
		y2 = 0
		y2randSpeed = random(4, 7);
	}

	//the third car and its speed
 image(car3,450,y3,150,100);
  y3+= y3randSpeed
	if (y3 > height){
		y3 = 0
		y3randSpeed = random(6, 10);
	}

 //make the sprite move one step with right key
 if (keyIsDown(RIGHT_ARROW)){
    carXpos +=6;  
 }
  //make the sprite move one step with left key
 if (keyIsDown(LEFT_ARROW)){
   carXpos -=6; 
 }
	//not to go out of the canvas
	if (carXpos > width - 50){
			carXpos = carXpos - 8;
	}
	if (carXpos < 0){
			carXpos = carXpos + 8;
	}

 //streetlight one
	image(streetlight1,x4,streetlight1Ypos,17,200);
 streetlight1Ypos+=4;
	if (streetlight1Ypos > height){
   streetlight1Ypos=y4;
}

 //streetlight two
	image(streetlight2,x5,streetlight2Ypos,17,200);
 streetlight2Ypos+=4;
	if (streetlight2Ypos >height){
	  streetlight2Ypos=y5
}

	//color sensitivity
	var	 color=get(carXpos+80 ,carYpos-1 );
	rect(carXpos,carYpos,5,5);
	fill(255,0,0);
	console.log(color);

	if (color [0] == 0 && color [1] == 0 && color [2] == 255 || color [0] == 255 && color [1] == 0 && color [2] == 0 || color [0] == 0 && color [1] == 255 && color [2] == 0 ){
		noLoop();

	}


}
