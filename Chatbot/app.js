var app = new Vue({
  el: "#app",
  data: {
    msg: "",
    chatHistory: [
      "Hi, my name is Nick and you will be speaking with me today!",
    ],
  },
  methods: {
    sendMessage: function () {
      if (this.msg !== "" && this.chatHistory.length < 19) {
        this.chatHistory.push(`USER : ${this.msg}`);
        this.botReply(this.msg);
        debugger;
        if (this.chatHistory.length >= 19) {
          this.chatHistory.length = 0;
        }
      }
    },
    botReply: function (msg) {
      let chatHistoryDiv = document.getElementById("chat-history");
      if (chatHistoryDiv.offsetHeight >= 500) {
        let oldLen = this.chatHistory.length;
        this.chatHistory.length = 0;
        this.chatHistory.push(
          "Nick (Bot): Wow! This conversation is getting long. I have cleared the past " +
            oldLen +
            " messages."
        );
      }
      msg = msg.toLowerCase();

      if (msg.includes("testing")) {
        var chatHistory = this.chatHistory;
        this.chatHistory.push("Nick is typing...");
        setTimeout(function () {
          chatHistory.pop();
          chatHistory.push("Nick (Bot): Thank you for testing with me");
        }, 2000);
        this.msg = "";
      } else if (msg.includes("name")) {
        var chatHistory = this.chatHistory;
        this.chatHistory.push("Nick is typing...");
        setTimeout(function () {
          chatHistory.pop();
          chatHistory.push("Nick (Bot): My name is Nick. ");
        }, 2000);
        this.msg = "";
      } else if (msg.includes("search for")) {
        var chatHistory = this.chatHistory;
        this.chatHistory.push("Nick is typing...");
        setTimeout(function () {
          chatHistory.pop();
          chatHistory.push(
            `Nick (Bot): Searching for '${
              msg.split(" ")[msg.split(" ").indexOf("for") + 1]
            }'...`
          );
          setTimeout(function () {
            window.open(
              "https://google.com/search?q=" +
                msg.split(" ")[msg.split(" ").indexOf("for") + 1]
            );
            chatHistory.pop();
            chatHistory.push(`Nick (Bot): Searched`);
          }, 2000);
        }, 2000);
        this.msg = "";
      } else if (
        msg.toLowerCase().includes("hello") ||
        msg.toLowerCase().includes("hi")
      ) {
        var chatHistory = this.chatHistory;
        this.chatHistory.push("Nick is typing...");
        setTimeout(function () {
          chatHistory.pop();
          chatHistory.push(
            `Nick (Bot): Hello! I am happy to be talking with you!`
          );
        }, 2000);
        this.msg = "";
      } else if (msg.includes("hate")) {
        var chatHistory = this.chatHistory;
        this.chatHistory.push("Nick is typing...");
        setTimeout(function () {
          chatHistory.pop();
          chatHistory.push(
            `Nick (Bot): Sorry. Is there anyway I could do better?`
          );
        }, 2000);
        this.msg = "";
      } else if (msg.includes("email")) {
        var chatHistory = this.chatHistory;
        this.chatHistory.push("Nick is typing...");
        setTimeout(function () {
          chatHistory.pop();
          chatHistory.push("Nick (Bot): Opening draft email...");
          setTimeout(function () {
            window.open(
              "mailto:" + msg.split(" ")[msg.split(" ").indexOf("email") + 1]
            );
            chatHistory.pop();
            chatHistory.push(`Nick (Bot): Opened`);
          }, 2000);
        }, 2000);
        this.msg = "";
      } else if (msg.includes("clear")) {
        this.chatHistory.length = 0;
        this.chatHistory.push("Nick (Bot): Cleared!");
        this.msg = "";
      } else if (msg.includes("dark mode")) {
        debugger;
        this.chatHistory.push("dark mode activated");
        document.querySelector("#container").style.backgroundColor = "white";
        document.body.style.backgroundColor = "black";
        this.msg = "";
      } else if (msg.includes("light mode")) {
        this.chatHistory.push("light mode activated");
        document.querySelector("#container").style.backgroundColor =
          "lightblue";
        document.body.style.backgroundColor = "white";
        this.msg = "";
      } else {
        var chatHistory = this.chatHistory;
        this.chatHistory.push("Nick is typing...");
        setTimeout(function () {
          chatHistory.pop();
          chatHistory.push(`Nick (Bot): I don't know what you said. `);
        }, 10);
        this.msg = "";
      }
    },
  },
});
