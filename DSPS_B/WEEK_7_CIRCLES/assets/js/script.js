var buttonEl = document.querySelector(".js-button-add");

var countShreks = 0;
buttonEl.addEventListener("click", function() {
    // Add 1 shrek
    countShreks++;

    // Create a shrek element 
    var shrekEl = document.createElement("div"); // <div></div>
    shrekEl.classList.add("shrek"); // <div class="shrek"></div>
    shrekEl.innerHTML = countShreks; // <div class="shrek">1</div>
    shrekEl.dataset.numberShrek = countShreks; // <div class="shrek" data-number-shrek="1">1</div>
    shrekEl.addEventListener("click", function() {
        console.log("Hello I am number " + this.dataset.numberShrek);
    });

    document.querySelector(".js-field").appendChild(shrekEl);
});