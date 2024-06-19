function addTask () {
    let input = document.getElementById("input");
    let newTask = input.value;
    if (newTask != "") {
        let item = document.createElement("li");
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + newTask;
        document.getElementById("tasks").appendChild(item); 
        input.value = "";
        input.placeholder = "enter next task ...";
    }
}

function markDone (item) {
    item.className = 'finished';
}

function remove (item) {
    if (item.className == 'finished') {
        item.remove();
    } 
}