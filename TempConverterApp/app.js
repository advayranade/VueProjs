
app = new Vue({
    el: "#app",
    data: {
        temp: "",
        converted_temp: "",
        conversion: ""
    },
    methods: {
        convertToC: function() {
            // (°F − 32) × 5/9 = °C
            this.converted_temp = (this.temp - 32) * (5/9);
            this.converted_temp = Math.floor(this.converted_temp);
            for (var i = 0; i < document.querySelectorAll(".converted").length; i++) {
                document.querySelectorAll(".converted")[i].innerHTML = "";
            }
            converted = document.createElement("p");
            converted.className = "converted";
            converted.textContent = this.converted_temp + " C";
            document.getElementById("app").appendChild(converted);

        },
        convertToF: function() {
            //(°C × 9/5) + 32 = °F
            this.converted_temp = (this.temp * (9/5)) + 32;
            this.converted_temp = Math.floor(this.converted_temp)
            // document.getElementById("app").removeChild("p");
            for (var i = 0; i < document.querySelectorAll(".converted").length; i++) {
                document.querySelectorAll(".converted")[i].innerHTML = "";
            }
            converted = document.createElement("p");
            converted.className = "converted";
            converted.textContent = this.converted_temp + " F";
            document.getElementById("app").appendChild(converted);

        },
        checkFC: function() {
            if (this.conversion == "toC") {
                this.convertToC();
            } else {
                this.convertToF();
            }
        }
    }
})