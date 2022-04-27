function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function checkEntitieAlive(entitie) {
    return entitie > 0 ? true : false;
}

const app = Vue.createApp({

    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            attackCounter: 0
        };
    },

    methods: {

        attackPlayer() {
            return this.playerHealth -= getRandomNumber(8, 15);
        },

        attackMonster(){
            return this.monsterHealth -= getRandomNumber(5, 12);

        },

        checkPlayerAlive() {
            return checkEntitieAlive(this.playerHealth);
        },

        checkMonsterAlive() {
            return checkEntitieAlive(this.monsterHealth);
        },

        attack() {
            if(this.checkPlayerAlive()) {
                this.attackPlayer();
                this.attackMonster();
                this.attackCounter++;
            }

        },

        specialAttack() {
                this.monsterHealth -= getRandomNumber(10, 15);
                this.attackPlayer();

        },

        doSpecialAttack() {

            if(this.attackCounter == 3 && this.checkPlayerAlive()) {
                this.specialAttack();
                this.attackCounter = 0;
            }

            if(this.attackCounter > 3 && this.checkPlayerAlive()) {
                this.specialAttack();
                this.attackCounter -= 3
            }

            if(this.attackCounter < 0) {
                this.attackCounter = 0;
            }
        }
    },

    computed: {
        reduceMonsterHealth() {
            if (this.monsterHealth <= 0) {
                return {width: 0 + '%'};
            }

            return {width: this.monsterHealth + '%'};
        },

        reducePlayerHealth() {
            if(this.playerHealth <= 0) {
                return {width: 0 + '%'};
            }

            return {width: this.playerHealth + '%'};

        }
    },

    // watch: {
    //     attackCounter(value) {
    //         if (value == 3) {
    //             this.attackCounter = 0;
    //         }
    //     }
    // }

});

app.mount('#game')