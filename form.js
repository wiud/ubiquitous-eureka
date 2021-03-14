class Form{
constructor(){
    this.title=createElement('h1')
    this.input=createInput('die fool or enter ur name')
    this.button=createButton('start')
    this.welcome=createElement('h2')
    this.reset=createButton('try again')
}
display(){
this.title.html("the race")
this.title.position(windowWidth/2,100)
this.input.position(windowWidth/2,windowHeight-500)
this.button.position(windowWidth/2+150,windowHeight-500)
this.reset.position(windowWidth/4,windowHeight-500)
this.reset.mousePressed(()=>{
game.update(0);
player.hahahaIWon(0);
player.playercountplus1(0);
})
this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name=this.input.value();
    playercount+=1;
    player.index=playercount;
    player.nameupdate();
player.playercountplus1(playercount);
this.welcome.html("welcome "+player.name)
this.welcome.position(windowWidth/2,windowHeight/2)
})
}

hide(){
    this.title.hide();
    this.input.hide();
    this.button.hide();
    this.welcome.hide();
}
/*welcomePlayer(){
    this.welcome=createElement('h2')
    this.welcome.html("welcome "+player.name)
    this.welcome.position(windowWidth/2,windowHeight/2)
}*/
}