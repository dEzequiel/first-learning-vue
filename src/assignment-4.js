const app = Vue.createApp({

    data() {
        return {
            inputedValue: '',
            paragraphVisibility: true,
            choosenColor: ''
        }
    },

    methods: {
        readInput(event) {
            this.inputedValue = event.target.value;
        },

        changePVisibility() {
            this.paragraphVisibility = !this.paragraphVisibility;
        },

        readChoosenColor(event) {
            this.choosenColor = event.target.value;
        }
    },

    computed: {
        applyStyleToP() {

            if(this.inputedValue == 'user1') {
                return {user1 : true};
            }

            if(this.inputedValue == 'user2') {
                return {user2 : true};
            }

        },

        applyStyleDependsOnVisibility() {
            return this.paragraphVisibility ? {visible : true} : {hidden : true}
        },

        applyChoosenColor() {
            return this.choosenColor;
        }
    }


});

app.mount('#assignment');