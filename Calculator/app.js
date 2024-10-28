var app = new Vue({
    el:"#app",
    data: {
        log: ""
    },
    methods: {
        addToLog: function(operator) {
            this.log += operator.toString()
        },
        clear: function() {
            this.log = "";
        },
        positiveNegative: function() {
            if(this.log.split("")[0] !== "-") {
                this.log = "-"+this.log;
            }
            
        },
        percent: function() {
            var percented = Number(this.log.split("")[this.log.split("").length-1])/100;
            var index = this.log.split("").length-1;
            var splitLog = this.log.split("");
            splitLog.pop();
            splitLog.push(percented.toString());
            this.log = splitLog.join('');
        },
        divide: function() {
           this.addToLog("/")
        },
        addNumber: function(e) {
            this.addToLog(e.target.textContent);
        },
        multiply: function() {
            this.addToLog("*")
        },
        minus: function() {
            this.addToLog("-");
        },
        plus: function() {
            this.addToLog("+");
        },
        equal: function() {
            if(eval(this.log) !== Infinity) {
                this.log = eval(this.log);
            } else {
                this.log = "WHAT!!!!"
            }
            
        }

    }
})