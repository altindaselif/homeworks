const textbox = document.getElementById("textbox");
const list = document.getElementById("list");
const toast = document.getElementById("toast")

function addTask() {
    if (textbox.value === "") {
        toast.style.display = "block"
        setTimeout(() => {
            toast.style.display = "none"
        }, 4000)
    } else {
        let li = document.createElement("li");
        li.innerHTML = textbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textbox.value = "";
    saveData();
}

list.addEventListener("click", (event) => {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
        saveData();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function getdata() {
    list.innerHTML = localStorage.getItem("data");
}

getdata();