const app = new Vue({
    el: '#app',
    data: {

        alertActive: false,
        strTodo: " ciao arsenè",
        todos: [{
                todo: 'sudiare',
                checked: false
            },
            {
                todo: 'divertirmi con vue Js',
                checked: false
            },
            {
                todo: 'studiare il codice e adattarlo',
                checked: true //riga 32 hml
            },
            {
                todo: 'disegnare a matita e finirlo in digitale',
                checked: false
            },

        ]








    },
    methods: {

        removeTodo(index) {
            //console.log(index);
            this.todos.splice(index, 1) //elimino elemento array 
        },
        addTodo() {


        },


    }
});

//console.log(app);