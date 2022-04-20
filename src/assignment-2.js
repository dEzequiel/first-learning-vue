const app = Vue.createApp({

    data() {
        return {
            ///
            inputedValue: '',
            keyDownOutput: '',
            keyEnterOutput: ''
        };
    },

    methods: {
        ///
        setInputedValue(event) {
            this.inputedValue = event.target.value;
        },

        alertInputedValue() {
            alert(this.inputedValue);
        },

        setOutputDown(event) {
            this.keyDownOutput = event.target.value;
        },

        setOutputEnter(event) {
            this.keyEnterOutput = event.target.value;
        }
    }
}).mount("#assignment")