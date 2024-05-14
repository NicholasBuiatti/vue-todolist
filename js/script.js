const { createApp } = Vue

createApp({
    data() {
        return {
            todoList : [
                'panca piana',
                'croci ai cavi',
                'military press',
                'pike pushUp',
                'rematore',
                'trazioni lente',
            ],
            exercise : '',
        }
    },
    methods: {
        pushIn() {
            this.todoList.push(this.exercise);
            this.exercise = '';
        },
        deleteEx(index) {
            this.todoList.splice(index, 1);
            console.log(index, this.todoList);
        },
    },
    mount() {

    }
}).mount('#app')