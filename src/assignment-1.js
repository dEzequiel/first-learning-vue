const app = Vue.createApp({

    data() {
        return {
            name: this.setName(),
            age: this.setAge(),
            // imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
        };
    },

    methods: {
        setName(yourName) {
            return this.name = yourName;
        },

        setAge(yourAge) {
            return this.age = yourAge;
        },

        getAge() {
            return this.age;
        }
    }

}
)

app.mount('#assignment')
