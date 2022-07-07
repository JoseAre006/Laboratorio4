let post = document.getElementById("ButtonPost")
let clear = document.getElementById("ButtonClear")
let mark = document.getElementById("ButtonMark")
let del = document.getElementById("ButtonDelete")
post.addEventListener("click",TodoPost)
clear.addEventListener("click",TodoClear)
mark.addEventListener("click",TodoMark)
del.addEventListener("click",TodoDel)
 
function TodoPost(event) {
    event.preventDefault()
    //1 Obtener el texto del textArea

    let todo = document.getElementById("todoText").value

    //2 Necesito la referencia del placeholder
    let list = document.getElementById("todoList")

    let currentList = list.innerHTML
    list.innerHTML = currentList + `<input type = "checkbox" name="todo"/> ${todo}`
}
 
function TodoClear() {
   
}
 
function TodoMark() {
   
}
 
function TodoDel() {
   
}