const app = Vue.createApp({
    data() {
      return {
        inputedGoal: '',
        goals: [] };
    },

    methods: {
        addGoal() {
            this.goals.push(this.inputedGoal);
        }

    },
    computed: {
        checkGoalsLength() {
            return this.goals.length === 0 ? true : false;
        }
    }
  });

  app.mount('#user-goals');