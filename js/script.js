const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                { compito: 'Rifare il letto', done: false },
                { compito: 'Lavarsi la faccia', done: false },
                { compito: 'Vestirsi', done: false },
                { compito: 'Fare colazione', done: false },
                { compito: 'Lavarsi i denti', done: false },
            ],
            exercise: '',
            colorCheck: '',
        }
    },
    methods: {
        pushIn() {
            this.todoList.push({ compito: this.exercise, done: false });
            this.exercise = '';
            console.log(this.todoList);
        },
        deleteEx(index) {
            this.todoList.splice(index, 1);
            console.log(index, this.todoList);
        },
        checkYes(index) {
            if (this.todoList[index].done == false) {
                this.todoList[index].done = true;
                this.colorCheck = 'bg-warning';
            } else {
                this.todoList[index].done = false
            }
        }
    },
    mount() {

    }
}).mount('#app')