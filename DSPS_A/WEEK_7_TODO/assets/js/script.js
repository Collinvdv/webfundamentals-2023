var inputEl = document.querySelector(".js-input-todo");
var buttonEl = document.querySelector(".js-button-add");
var listEl = document.querySelector(".js-list-todo");

// Strategy 1
// var todos = "";
// buttonEl.addEventListener("click", function() {
//     todos += "<li>" + inputEl.value + "</li>";
//     listEl.innerHTML = todos;
// });

// Strategy 2;
// var todos = [];

// buttonEl.addEventListener("click", function() {
//     todos.push(inputEl.value);

//     var result = "";
//     for (var index = 0; index < todos.length; index++ ) {
//         result += "<li class=\"italic\">" + todos[index] + "</li>";
//     }

//     listEl.innerHTML = result;
// });

// Strategy 3;
buttonEl.addEventListener("click", function() {
    var listItem = document.createElement("li"); // <li></li>
    listItem.innerHTML = inputEl.value; // <li>Clean my room</li>
    listItem.classList.add("italic"); // <li class="italic">Clean my room</li>
    
    listEl.appendChild(listItem);
});

console.log(listEl.parentElement);
