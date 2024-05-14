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
        },
    },
    mount() {

    }
}).mount('#app')