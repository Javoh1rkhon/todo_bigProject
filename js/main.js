const inpTodo = document.querySelector('.typing')
const addTodo = document.querySelector('.send')
const todoItems = document.querySelector('.todoItems')

let state = {
    todos: [],
}

inpTodo.addEventListener('keyup', (e) => {
    title = e.target.value
})

let counter = 0

addTodo.addEventListener('click', (e) => {
    e.preventDefault()
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()

    let newTodo = {
        id: counter,
        title,
        time: `${hour}:${minutes}:${second}`
    }
    let todoHtml = `
    <div class="item">
    <div class="in">
    <p class="itemText">${newTodo.title}</p>
    <i class='bx bxs-x-circle' class="close"></i>
</div>
    <h1 class="time">${newTodo.time}</h1>
</div>
    `

    todoItems.insertAdjacentHTML('beforeend', todoHtml)

    state.todos.push(newTodo)
    counter++
    newTodo.id = counter
    inpTodo.value = ''

    console.log(state);
})