const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },

    methods: {
        increment() {
            this.counter += 1;
        },

        decrease() {

            this.counter -= 1;

            if (this.counter <= 0) {
                this.counter = 0
            }


        },
        setName(event) {
            this.name = event.target.value;
        }
    }
});

app.mount('#events');