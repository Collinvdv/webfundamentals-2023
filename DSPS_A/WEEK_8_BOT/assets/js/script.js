var goodResponses = [
    "Good for you pall",
    "Nice to hear",
    "Awesome sauce",
    "That's fantastic!",
    "Way to go!",
    "Well done!",
    "Keep up the good work!",
    "Brilliant!",
    "Wonderful news!",
    "That's great to hear!",
    "Superb!",
    "You're doing great!",
    "That's really impressive!",
    "Kudos to you!",
    "That's a real achievement!",
    "You've made my day!",
    "That's a reason to celebrate!",
    "You nailed it!",
    "You're on the right track!",
    "Hooray for you!",
    "That's a big win!",
    "You're killing it!",
    "Outstanding work!",
    "You're a star!",
    "That's a milestone!",
    "Excellent progress!",
    "You've outdone yourself!",
    "That's a job well done!",
    "You should be proud!",
    "What a fantastic update!",
    "You're making waves!",
    "You're setting a great example!",
    "That's so uplifting!",
    "You're a true inspiration!",
    "Remarkable achievement!",
    "You're making a difference!",
    "What an accomplishment!",
    "You've exceeded expectations!",
    "That's top-notch!",
    "You've earned a thumbs up!"
];

var negativeResponses = [
    "That's disappointing",
    "That's not ideal",
    "Could be better",
    "That's unfortunate",
    "Not what I hoped to hear",
    "That's a letdown",
    "Not the best news",
    "That's a bummer",
    "Less than stellar",
    "That's regrettable",
    "Not great",
    "That's a setback",
    "Not so good",
    "That's a downer",
    "That's not good",
    "A bit of a problem",
    "That's troubling",
    "That's a negative",
    "Not very encouraging",
    "That's a bit of a blow",
    "Not what we wanted",
    "That's a misstep",
    "That's a bit worrying",
    "That's a concern",
    "Not what you want to hear",
    "That's a bit of a letdown",
    "That's not up to par",
    "That's a disappointment",
    "Not quite right",
    "That's a bit off",
    "Not the desired outcome",
    "That's not optimal",
    "That's not great",
    "That's a bit dismal",
    "That's not the best",
    "Not what was expected",
    "That's a drawback",
    "That's a bit discouraging",
    "That's not ideal",
    "That's an issue"
];

var neutralResponses = [
    "I see",
    "Noted",
    "Okay",
    "Understood",
    "Right",
    "Acknowledged",
    "That's noted",
    "I understand",
    "That's clear",
    "Fair enough",
    "Makes sense",
    "I get it",
    "Got it",
    "That's one way to see it",
    "Point taken",
    "That's an option",
    "Certainly",
    "Indeed",
    "That's one perspective",
    "I hear you",
    "That's a possibility",
    "Interesting point",
    "That's one viewpoint",
    "I'll consider that",
    "That's a thought",
    "Let's see",
    "Hmm",
    "I suppose",
    "Could be",
    "That's one approach",
    "I'll think about it",
    "That's a way to look at it",
    "That's possible",
    "That's feasible",
    "I'll keep that in mind",
    "Let's consider that",
    "That's worth considering",
    "Let's ponder that",
    "That's one angle",
    "Let's contemplate that"
];

var buttonEl = document.querySelector(".js-btn");

buttonEl.addEventListener("click", function() {
    // User input
    var userMessage = document.querySelector(".js-user-input").value;
    addMessage(userMessage, false);
    document.querySelector(".js-user-input").value = "";

    // Bot will respons
    var botMessage = botResponse(userMessage);
    addMessage(botMessage, true);
});

function botResponse(userMessage) {
    if (userMessage.toLowerCase().includes("hello")) {
        return "Hiiiiiiii";
    }

    if (
        userMessage.toLowerCase().includes("good")
        || userMessage.toLowerCase().includes("great")
    ) {
        return giveRandomMessage(goodResponses);
    }

    if (
        userMessage.toLowerCase().includes("bad")
        || userMessage.toLowerCase().includes("not great")
    ) {
        return giveRandomMessage(negativeResponses);
    }

    return giveRandomMessage(neutralResponses);
}

function giveRandomMessage(messages) {
    var randomResponse =  Math.round(Math.random() * messages.length);
    return messages[randomResponse];
}

function addMessage(message, isBot) {
    // Create a message row
    var messageRowEl = document.createElement("div"); // div
    messageRowEl.classList.add("message-row"); // <div class="message-row"></div>
    if (isBot) {
        messageRowEl.classList.add("message-bot"); 
    }

    // Creating a message
    var messageEl = document.createElement("div"); // <div></div>
    messageEl.classList.add("message"); // <div class="message"></div>
    messageEl.innerHTML = message; // <div class="message">Hell mr frog</div>

    // Add message in to the row
    messageRowEl.appendChild(messageEl);

    // Add message row to the actual overview on html
    document.querySelector(".messages-overview").appendChild(messageRowEl);
}