const app = Vue.createApp({

    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },

    computed: {
        boxAClass() {
            return {active : this.boxASelected};
        },
        
        boxBClass() {
            return {active : this.boxBSelected};
        }
    },

    methods: {
        boxSelected(box) {
            if (box == 'A') {
                this.boxASelected = true;
                this.boxBSelected = false;
                boxCSelected = false;
            } else if(box == 'B') {
                this.boxASelected = false;
                this.boxBSelected = true;
                this.boxCSelected = false;
            } else {
                this.boxASelected = false;
                this.boxBSelected = false;
                this.boxCSelected = true;
            }
        }
    }

});

app.mount('#styling');