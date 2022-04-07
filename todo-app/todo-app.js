const todos = [{
    text: "Order cat food",
    completed: false
}, {
    text: "Clean kitchen",
    completed: true
}, {
    text: "Buy food",
    completed: true
}, {
    text: "Do work",
    completed: false
}, {
    text: "Excercise",
    completed: true
}]

// const p = document.querySelectorAll("p")
// p.forEach(function(p){
//     if(p.textContent.includes("Need")){
//         p.remove()
//     }
// })

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

const incompleteTodos = todos.filter(function (todo){
    return !todo.completed
})

const summary = document.createElement("h2")
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo){
    const p = document.createElement("p")
    p.textContent = todo.text
    document.querySelector("body").appendChild(p)
})