function addTask() {
    const taskInp = document.querySelector("#task-input");
    const taskTitle = taskInp.value;
    
    taskInp.value = "";

    if (!taskTitle) {
        return;
    }

    const newTask = document.querySelector(".template").cloneNode(true);

    newTask.querySelector(".task-title").textContent = taskTitle;
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    appendCompleteEvent(newTask);
    appendDescartEvent(newTask);

    document.querySelector("#task-list").appendChild(newTask);
}

function appendCompleteEvent(newTask) {
    const completeBtn = newTask.querySelector(".complete-button");
    let counter = 1;

    completeBtn.onclick = () => {
        const taskTitle = newTask.querySelector(".task-title");

        if (counter % 2 != 0) {
            taskTitle.style.cssText = "text-decoration: line-through; color: var(--prominent-color)";
        } else {
            taskTitle.style.cssText = "text-decoration: none; color: var(--trans-black-color)";
        }

        counter++;
    }
}

function appendDescartEvent(newTask) {
    const descartBtn = newTask.querySelector(".descart-button");

    descartBtn.onclick = () => {
        const tasksList = newTask.parentNode;
        tasksList.removeChild(newTask);
    }
}

/* --- */

const addBtn = document.querySelector(".add-button");

addBtn.onclick = e => {
    e.preventDefault();
    addTask();
}
