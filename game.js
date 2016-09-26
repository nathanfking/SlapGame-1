var items = {
    // blocks one spell 13 second refresh rate
    linkensSphere: new Item("Linken's Sphere"),
    // +8 hitpoint regen
    vanguard: new Item("VAnguard"),
    // 4.75% enemy.health restored per second
    heartOfTarrasque: new Item("Heart of Tarrasque"),

}
var enemies = {
    bloodSeeker: {
        name: "Blood Seeker",
        hitPoints: 2500,
        health: 2500,
        items: [],
        image: "images/bld.png"
    },
    tiny: {
        name: "Tiny",
        hitPoints: 3500,
        health: 3500,
        items: [],
        image: "images/tiny.png"
    }
}
var enemy = enemies.tiny
function drawEnemy() {
    var img = document.getElementById("enemy-image")
    img.src = enemy.image
    drawHealth()
}
function Item(name) {
    this.name = name
}
function onBasicAttack() {
    enemy.health -= 120;
    update();
}
// Launches a salvo of rockets at nearby enemy units in 
// a radius around the Gyrocopter. Lasts 3 seconds.
function onRocketBarrage() {
    enemy.health -= 375;
    update();
}
// Fires a homing missile to seek the targeted enemy unit. 
// The missile gains speed over time, dealing damage and stunning 
// when it impacts the target. Homing Missile deals greater 
// damage the further it has traveled. Enemy units can destroy 
// the missile before it reaches its target.
function onHomingMissile() {
    enemy.health -= 375;
    update();
}
// Gyrocopter's attacks hit all enemy units in an area around it for 
// a limited number of attacks. Only the main target of attacks will 
// receive attack bonuses such as Critical Strike. Lasts 15 seconds or 
// until the attacks are used.
function onFlakCannon() {
    enemy.health -= 225;
    update();
}
// Call down an aerial missile strike on enemy units in a target area. 
// Two missiles arrive in succession, the first dealing major damage and 
// minor slow for 2 seconds; the second dealing minor damage and major 
// slow for 4 seconds. Upgradable by Aghanim's Scepter.
function onCallDown() {
    enemy.health -= 775;
    update()
}
/*
grad change of color to red as enemy.health decreases
at 50% turn yellow
at 25% turn orangish
at 10% turn red
*/
function update() {
    if (enemy.health <= 0) {
        enemy.health = 0
    }

    if (enemy.health >= enemy.hitPoints) {
        enemy.health = enemy.hitPoints
    }
    drawEnemy()
}
function onPlayAgain() {
    enemy.health = enemy.hitPoints;
    update();
}
function drawHealth() {
    var color = "green"
    if (enemy.health <= enemy.hitPoints * .5) {
        color = "yellow"
    }
    if (enemy.health <= enemy.hitPoints * .25) {
        color = "orange"
    }
    if (enemy.health <= enemy.hitPoints * .1) {
        color = "red"
    }
    var hitPoints = document.getElementById("enemy-health")
    hitPoints.textContent = enemy.health;
    hitPoints.style.color = color
}
//This is a game loop that should run every 5 seconds
// MUST REMEMBER THIS ONE
function gameLoop() {
    console.log("running gameLoop")

    enemy.health += ~~(enemy.health * (.08 / 10))

    update()
    //Keep this at bottom of gameloop function
    window.setTimeout(gameLoop, 100)
}
//Always Keen This As Last Line
update()
gameLoop()