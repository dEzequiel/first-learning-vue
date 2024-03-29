const app = Vue.createApp({
    data() {
      return {
        inputedGoal: '',
        goals: [],
        // person: {name: 'eze', age: 19}
        };
    },

    methods: {
        addGoal() {
            this.goals.push(this.inputedGoal);
        },

        removeGoal(index) {
            this.goals.splice(index, 1);
        }

    },
    computed: {
        checkGoalsLength() {
            return this.goals.length === 0 ? true : false;
        }
    }
  });

  app.mount('#user-goals');