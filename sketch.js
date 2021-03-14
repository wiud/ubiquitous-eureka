var formclass,database;
var gamestate=0;
var playercount;
var player, game, form;
var allPlayers;
var c1,c2,c3,c4;
var c5
var c1img,c2img,c3img,c4img,track;
var plrank;
function preload(){
    c1img=loadImage("car1.png");
    c2img=loadImage("car2.png");
    c3img=loadImage("car3.png");
    c4img=loadImage("car4.png");
    track=loadImage("track.jpg");
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
   // formclass= new Form();
   // formclass.display();
   // player=new Player();
    game = new Game();
    game.getState();
    game.waiting();
    console.log('gamestate');
    console.log(gamestate);
}

function draw(){
    //if 4 player join the game then change gamestate in database to 1
if(playercount===4){
    game.update(1); 
}

//gamestate = 1 means play game

if(gamestate ===1){
    game.play();
}
if(gamestate===2) {
    game.end();
}
}