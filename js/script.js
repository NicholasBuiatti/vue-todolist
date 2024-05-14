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
            this.todoList[index+1].done = this.todoList[index+2].done
        },
        checkYes(index) {
            if (this.todoList[index].done == false) {
                this.todoList[index].done = true;
            } else {
                this.todoList[index].done = false
            }
        }
    },
    mount() {

    }
}).mount('#app')