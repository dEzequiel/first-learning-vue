const app = Vue.createApp({

    data() {
        return {
            result: 0,
        }
    },

    methods: {
        addNumber(number) {
            this.result += number;
        }
    },

    computed: {
        displayMessage() {

            if (this.result < 37) {
                return 'Not there yet!'
            } else if (this.result == 37) {
                return 37
            } else {
                return 'Too much!!'
            }

        }
    },

    watch: {
        result(value) {
            if (value == 37) {
                setTimeout(() => {
                    this.result = 0
                }, 5000);
            }
        }
    }


});

app.mount('#assignment')