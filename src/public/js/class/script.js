const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

const container = document.querySelector(".container");

function toggleMode(){

    container.classList.toggle("dark-mode");

}

function addTask()
{

    if(inputBox.value === ''){

        alert("You most write something!")

    }else{

        let li = document.createElement("li");

        li.classList.add("content")

        li.innerHTML = inputBox.value;

        listContainer.appendChild(li);

        let span = document.createElement("span");

        span.innerHTML = "\u00d7";

        li.appendChild(span);

    }

    inputBox.value = ""

    saveData();

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");

        saveData();

    }
    else if(e.target.tagName === "SPAN"){

        e.target.parentElement.remove();

        saveData();

    }
})

function saveData(){

    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask(){

    listContainer.innerHTML = localStorage.getItem("data");

}

showTask();

inputBox.addEventListener("keypress", function(e){

    if(e.key == "Enter"){

        e.preventDefault();

        document.querySelector("#button-input-box").click();

    }

})
