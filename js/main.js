// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const { createApp } = Vue

createApp({
    data() {
        return {
            newTodo: '',
            todoList: [
                {
                    text: 'Iscrizione alla palestra',
                    done: false,
                },
                {
                    text: 'Preparare le scatole per il trasloco',
                    done: false,
                },
                {
                    text: 'Cambiare medico di base',
                    done: false,
                },
                {
                    text: 'Voltura delle utenze',
                    done: false,
                },
                {
                    text: 'Chiamare il toelettatore',
                    done: false,
                }
            ]
        }
    },
    methods: {
        addTodo() {
            if( this.newTodo !== '' ) {
                this.newTodo = {
                    text: this.newTodo,
                    done: false,
                };
                this.todoList.push(this.newTodo);
                console.log(this.todoList);
                this.newTodo = '';
            }
        },

        removeTodo(index) {
            this.todoList.splice(index, 1);
        },
    }
}).mount('#app')