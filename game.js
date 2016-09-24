
// this is player object
// function player (johnDoe,janeDoe,tomDoe,tinaDoe){
//     this.johnDoe = johnDoe;
//     this.janeDoe = janeDoe;
//     this.tomDoe = tomDoe;
//     this.tinaDoe = tinaDoe;
// }
// This is attack functions
var health = 100;
function onSlap() {
    var slap = Math.floor(Math.random()*10)+1;
    health -= slap;
    update();
    return health;
    }
   
    function onPunch() {
        var punch = Math.floor(Math.random()*20)+1;
        health -= punch;
        update();
        return health;
    }
    function onKick() {
        var kick = Math.floor(Math.random()*40)+1;
        health -= kick;
        update ();
        return health;
    }
   
    function reset() {
        health = 100;
        update();
    }
     function update() {
    if (health <= 0); 
        health = 0;
    
    var healthElem = document.getElementById("health");
    healthElem.innerHTML = health;

    }break