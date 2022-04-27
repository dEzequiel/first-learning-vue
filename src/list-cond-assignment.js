const app = Vue.createApp({

    data() {
        return {
            inputedTask: '',
            tasks: [],
            showList: true,
        }
    },

    methods: {

        addTask() {
            this.tasks.push(this.inputedTask);
        },

        removeTask(index) {
            this.tasks.splice(index, 1)
        },

        hideList() {

            const buttonElement = document.getElementById('displayButton');
            this.showList = !this.showList;

            if (this.showList) {
                return buttonElement.innerText = 'Hide';
            } else {
                return buttonElement.innerText = 'Show'
            }
        }
    },

    computed: {
        checkTasksLength() {
            return this.tasks.length === 0 ? true : false;
        },

        checkListDisplay() {
            return this.showList ? true : false;
        }
    }


});

app.mount('#assignment');