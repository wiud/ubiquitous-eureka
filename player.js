class Player{
constructor(){
    this.index=null;
    this.name=null;
    this.distance = 0;
    this.rank=0;
}
hahahaYouLost(){
    database.ref('rank').on('value',(data)=>{this.rank=data.val();
        plrank=data.val()});
}
hahahaIWon(prank){
    database.ref('/').update({rank:prank})
}
getCount(){
    var pcr;
    pcr=database.ref('playercount').on('value',(data)=>{playercount=data.val()})

}
playercountplus1(count){
    database.ref('/').update({playercount:count})
}
nameupdate(){
var pi="players/player"+this.index
database.ref(pi).set({name:this.name, distance:this.distance, rank:this.rank});
}

static getPlayerDetails(){
    var plref = database.ref('players');
    plref.on('value', (data)=>{
        allPlayers = data.val();
    })
}
}