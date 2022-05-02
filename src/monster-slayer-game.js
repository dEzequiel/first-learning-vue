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
            attackCounter: 0,
            winner: null,
        };
    },

    methods: {

        attackPlayer() {
            const damage = getRandomNumber(8, 15)
            return this.playerHealth -= damage;
        },

        attackMonster() {
            const damage = getRandomNumber(5, 12);
            return this.monsterHealth -= damage;

        },


        attack() {

            if(!checkEntitieAlive(this.monsterHealth)) {
                return;
            }

            if (checkEntitieAlive(this.playerHealth)) {
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

            if(!checkEntitieAlive(this.monsterHealth)) {
                return;
            }

            if (this.attackCounter == 3 && checkEntitieAlive(this.playerHealth)) {
                this.specialAttack();
                this.attackCounter = 0;
            }

            if (this.attackCounter > 3 && checkEntitieAlive(this.playerHealth)) {
                this.specialAttack();
                this.attackCounter -= 3
            }

            if (this.attackCounter < 0) {
                this.attackCounter = 0;
            }
        },

        heal() {

            if(!checkEntitieAlive(this.monsterHealth)) {
                return;
            }

            if (checkEntitieAlive(this.playerHealth) && this.playerHealth < 100) {
                this.playerHealth += getRandomNumber(8, 20);
                this.attackPlayer();
                this.attackCounter++;
            }
        },

        surrender() {
            this.playerHealth = 0
            this.winner = 'Monster';
        },

        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.attackCounter = 0;
        }
    },

    computed: {
        modifyMonsterHealthBar() {
            if (this.monsterHealth <= 0) {
                return { width: 0 + '%' };
            }

            return { width: this.monsterHealth + '%' };
        },

        modifyPlayerHealthBar() {

            if (this.playerHealth > 100) {
                return { width: 100 + '%' };
            }

            if (this.playerHealth <= 0) {
                return { width: 0 + '%' };
            }

            return { width: this.playerHealth + '%' };

        },

        stablishWinner() {

            if(!checkEntitieAlive(this.monsterHealth) && !checkEntitieAlive(this.playerHealth)) {
                this.winer = null;
                return "It's a draw!"
            }

            if (!checkEntitieAlive(this.playerHealth)) {
                this.winner = 'Monster'
                return this.winner + ' won!'
            }

            if(!checkEntitieAlive(this.monsterHealth)) {
                this.winner = 'Player'
                return this.winner + ' won!'
            }


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