// When you click on .js-btn-add 
// log the value of .js-input-todo
var inputEl = document.querySelector(".js-input-todo");
var btnEl = document.querySelector(".js-btn-add");
var listEl = document.querySelector(".js-todo-list");

// Strategy 1
// var todos = "";
// btnEl.addEventListener("click", function() {
//     todos += "<li>" + inputEl.value + "</li>";
//     console.log(todos);
//     listEl.innerHTML = todos;
// });

// Strategy 2
// var todos = [];
// btnEl.addEventListener("click", function() {
//     todos.push(inputEl.value);

//     var output = "";
//     for (var i = 0; i< todos.length; i++) {
//         output += "<li class=\"list-item\">"+ todos[i] +"</li>";
//     }
//     listEl.innerHTML = output;
// });

// Strategy 3
btnEl.addEventListener("click", function() {
    var listItem = document.createElement("li");
    listItem.innerHTML = inputEl.value;

    listEl.appendChild(listItem);
});