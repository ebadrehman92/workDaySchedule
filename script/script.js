var saveButton = document.getElementById("saveBtn");
var message = document.getElementById('message')

var update = function() {
    var timer = document.getElementById('1a');
    timer.innerHTML = moment().format("MMMM Do, YYYY, h:mm:ss a");
    // event.preventDefault();
}
update();
setInterval(update, 1000);


saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var taskMessage = {
        moment: message.value
    }

    localStorage.setItem("taskMessage", JSON.stringify(taskMessage));
renderMessage();

function renderMessage() {
    var lastMessage = JSON.stringify(localStorage.getItem("taskMessage"));
    if (lastMessage !== null) {
      document.querySelector(".message").textContent = message.message
    }
}})

