const btnDOM = document.querySelector("#liveToastBtn")
const taskDOM = document.querySelector("#task")
const listDOM = document.querySelector("#list")
const lastChild = document.querySelector('ul:last-child')



// Listeye eleman ekleme işlemi

btnDOM.addEventListener("click",addItem)

function addItem() {
    const liCreateDom = document.createElement("li")
    liCreateDom.innerText = taskDOM.value
    listDOM.append(liCreateDom)
    taskDOM.value = ""
   
}