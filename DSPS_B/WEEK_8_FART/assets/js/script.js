var letterEls = document.querySelectorAll(".js-letter");

// clicking on audiofile
for (var i = 0; i < letterEls.length; i++) {
    letterEls[i].addEventListener("click",function() {
        playAudioFile(this.dataset.audiofile);
    })
}

// Keyboard
document.addEventListener("keypress", function(event) {
    if (event.keyCode == 102) {
        playAudioFile("fart1.mp3");
        makeLetterActive("f");
    }
    if (event.keyCode == 97) {
        playAudioFile("fart2.mp3");
        makeLetterActive("a");
    }
    if (event.keyCode == 114) {
        playAudioFile("fart3.mp3");
        makeLetterActive("r");;
    }
    if (event.keyCode == 116) {
        playAudioFile("fart4.mp3");
        makeLetterActive("t");
    }
});

function makeLetterActive(letter) {
    document.querySelector(".js-letter-" + letter).classList.add("active");
    setTimeout(function() {
        document.querySelector(".js-letter-" + letter).classList.remove("active");
    }, 500);
}

function playAudioFile(filename) {
    var audioFile = new Audio("./assets/audio/" + filename);
    audioFile.play();
}