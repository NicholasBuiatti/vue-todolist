const { createApp } = Vue

createApp({
    data() {
        return {
            todoList : [
                {compito : 'Rifare il letto', done : true },
                {compito : 'Lavarsi la faccia', done : true },
                {compito : 'Vestirsi', done : true },
                {compito : 'Fare colazione', done : true },
                {compito : 'Lavarsi i denti', done : true },
            ],
            exercise : '',
        }
    },
    methods: {
        pushIn() {
            this.todoList.push({compito : this.exercise, done : true });
            this.exercise = '';
            console.log(this.todoList);
        },
        deleteEx(index) {
            this.todoList.splice(index, 1);
            console.log(index, this.todoList);
        },
    },
    mount() {

    }
}).mount('#app')