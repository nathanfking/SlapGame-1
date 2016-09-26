var Bloodseeker = new enemy('Bloodseeker',100,5,5,5,10
var enemy = Bloodseeker;
var items = {

}
function player(health, )
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
 }