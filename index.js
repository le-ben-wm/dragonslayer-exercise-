/**
 * Created by session1 on 9/25/15.
 */
var slaying = true;
//Determines whether you hit or miss
var youHit = Math.random();
//Damage done by player every round
var damageDone = Math.floor(Math.random() * 20 + 50);
//Damage done by Dragon every round
var damageTaken = Math.floor(Math.random() * 3);
//Total damage done to dragon
var totalDamage = 0;
//Total damage done to player
var totalDamageTaken = 0;
//Total health of the player
var playerHealth = 1000;
//Total health of the dragon
var dragonHealth = 500;
while(slaying) {
    if (youHit >= .5) {
        damageDone = Math.floor(Math.random() * 3);
        totalDamage += damageDone;
        if (dragonHealth <= totalDamage) {
            console.log("You win!");
            slaying = false
        }
        else {
            damageTaken = Math.floor(Math.random() * 3);
            totalDamageTaken += damageTaken;
            if (playerHealth <= totalDamageTaken) {
                console.log("You lose!");
                slaying = false
            }
        }
    }
    else {
        console.log("You missed!");
        damageTaken = Math.floor(Math.random() * 2);
        totalDamageTaken += damageTaken;
        if (playerHealth <= totalDamageTaken) {
            console.log("You lose!");
            slaying = false
        }
    }
}