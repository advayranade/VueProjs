
var app = new Vue({
    el: "#app",
    data: {
        books: [
            {name: "Lord of the Rings - 1", published: "1987", author: "JRR Tolkien"},
            {name: "Lord of the Rings - 2", published: "1988", author: "JRR Tolkien"},
            {name: "Lord of the Rings - 3", published: "1989", author: "JRR Tolkien"}
        ]
    }, 
    methods: {
        reverseOrder: function() {
            this.books = this.books.reverse()
        }
    }
})


