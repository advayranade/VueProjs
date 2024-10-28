var app = new Vue({
    el: "#app",
    data: {
        tasks: [],
        completeTasks: [],
        todo: "" 
    },
    methods: {
        addTask: function() {
            this.tasks.push(this.todo);
            this.todo = "";
        },
        completeTask: function(e) {
            var span = e.target.nextElementSibling;
            this.completeTasks.push(span.innerHTML);
            this.tasks.splice(this.tasks[this.tasks.indexOf(span.innerHTML)], 1);    
        },
        deleteTask: function(e) {
            debugger;
            var taskIndex = this.tasks.indexOf(e.target.parentElement.textContent.split(" ")[1]);
            this.tasks.splice(this.tasks[taskIndex], 1); 
            
        }
    }
})