var letterEls = document.querySelectorAll(".js-letter");

// Click events on fart directly
for (var i = 0; i < letterEls.length; i++) {
    letterEls[i].addEventListener("click", function() {
        var audioFile = this.dataset.audiofile;
        playFartFile(audioFile);
    });
}

// Key press code
document.addEventListener("keypress", function(e) {
    // they have typed f
    if (e.keyCode == 102) {
        playFartFile("fart-01.mp3");
        putLetterActiveFor1Second("f");
    }

    // they have typed a
    if (e.keyCode == 97) {
        playFartFile("fart-02.mp3");
        putLetterActiveFor1Second("a");
    }

    // they have typed r
    if (e.keyCode == 114) {
        playFartFile("fart-03.mp3");
        putLetterActiveFor1Second("r");
    }

    // they have typed t
    if (e.keyCode == 116) {
        playFartFile("fart-04.mp3");
        putLetterActiveFor1Second("t");
    }
})

function putLetterActiveFor1Second(letter) {
    document.querySelector(".js-letter-" + letter).classList.add("active");
        
    setTimeout(function() {
        document.querySelector(".js-letter-" + letter).classList.remove("active")
    }, 1000);
}
function playFartFile(filename) {
    var fart = new Audio('./assets/audio/' + filename);
    fart.play();
}