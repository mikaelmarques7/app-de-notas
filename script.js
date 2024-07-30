const notasContainer = document.querySelector(".notas-container");
const createBtn = document.querySelector(".create-btn");


function mostrarNotas() {
    const savedNotas = localStorage.getItem("notas");
    if (savedNotas) {
        notasContainer.innerHTML = savedNotas;
    }
}
mostrarNotas();

function updateStorage() {
    localStorage.setItem("notas", notasContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let noteBox = document.createElement("p");
    let img = document.createElement("img");
    
    noteBox.className = "note-box";
    noteBox.setAttribute("contenteditable", "true");
    
    img.src = "images/delete.png";
    img.alt = "Delete";
    
    noteBox.appendChild(img);
    notasContainer.appendChild(noteBox);

    
    updateStorage();
});


notasContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});


notasContainer.addEventListener("input", function () {
    updateStorage();
});


document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
