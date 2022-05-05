const app = Vue.createApp({
    data() {
        return {
            contacts: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },

                {
                    id: 'eze',
                    name: 'Ezequiel Dlr',
                    phone: '1234 5678 991',
                    email: 'ezequiel@localhost.com'
                }
            ]
        }
    },
});

app.component('contact-user', {

    template: `
        <li v-for="contact in contacts"  :key="contact.id">
            <h2>{{ contact.name }}</h2>
            <button @click="showDetails()">{{messageDetails }}</button>
            <ul v-if="isVisible">
                <li><strong>Phone: </strong> {{contact.phone}} </li>
                <li><strong>Email: </strong> {{contact.email }}</li>
             </ul>
        </li>
    `,

    data() {
        return {
            isVisible: false,
            contacts: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },

                {
                    id: 'eze',
                    name: 'Ezequiel Dlr',
                    phone: '1234 5678 991',
                    email: 'ezequiel@localhost.com'
                }
            ]
        }
    },

    methods: {
        showDetails() {
            this.isVisible = !this.isVisible;
        }
    },

    computed: {
        messageDetails() {
            if(this.isVisible) {
                return 'Hide Details';
            } else {
                return 'Show Details';
            }
        }
    }
});

app.mount('#app');