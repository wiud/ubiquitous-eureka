class Game {
    constructor(){}
    getState(){
      var gameStateRef  = database.ref('gamestate');
      gameStateRef.on("value",(data)=>{
         gamestate = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gamestate: state
      });

       }

   async waiting(){
           if(gamestate === 0){
               player = new Player();
               var playerRef = await database.ref('playercount').once("value")
               if (playerRef.exists()){
                 playercount=playerRef.val();
                 player.getCount();
               }
              
               form = new Form();
                form.display();
           }
           c1=createSprite(100,700,50,100);
           c2=createSprite(300,700,50,100);
           c3=createSprite(500,700,50,100);
           c4=createSprite(700,700,50,100);
           c1.addImage("c1",c1img);
           c2.addImage("c2",c2img);
           c3.addImage("c3",c3img);
           c4.addImage("c4",c4img);
           c5=[c1,c2,c3,c4]
       }
       
play(){
  
 form.hide();
 Player.getPlayerDetails();
 player.hahahaYouLost();
 var y_position = 150;
 image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
 var x=200;
 var index=0;
 var y;
 for (var plr in allPlayers){
   index=index+1;
   x=x+200
   y=displayHeight-allPlayers[plr].distance;
   c5[index-1].x=x
   c5[index-1].y=y
   if(index===player.index){
     camera.position.x=displayWidth/2;
     camera.position.y=c5[index-1].y;
   }
   if (plr === "player" + player.index)
    fill("blue")
   else
    fill("black");    
   y_position+=30;
  text(allPlayers[plr].name + " "+ allPlayers[plr].distance, 200, y_position );

 }
 
 if (keyIsDown(UP_ARROW)){
   player.distance += 10;
   player.nameupdate();
 }
if(player.distance>4400){
gamestate=2;
player.rank=player.rank+1;
player.hahahaIWon(player.rank);
player.nameupdate();
player.hahahaYouLost();
}
 drawSprites();
}
end(){
  console.log("gameEnded");
  console.log(player.rank);
  if(player.rank===1){
  var message1=createElement('h2');
  message1.html("yay you came first");
  message1.position(displayWidth/2,200);
  if(player.rank===2){
var message2=createElement('h2');
message2.html("yay you camae second");
message2.position(displayWidth/2,200);
  }
  if(player.rank===3){
    var message3=createElement('h2')
    message3.html("yay you came second, second last that is haha noob");
    message3.position(displayWidth/2,200);
  }
  if(player.rank===4){
    var message4=createElement('h2')
    message4.html("hahahahahaha nooooobbbb you came last, you're so bad");
    message4.position(displayWidth/2,200);
  }
  }
}

    }
