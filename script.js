"use strict";

function erSynlig(ElementId) {
    const elementBoks = document.getElementById(ElementId).getBoundingClientRect();
    const halvtredsPct = elementBoks.height * 0.5;
    const start = window.innerHeight - halvtredsPct;

    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;
    } else {
        return false;
    }
}


function aktiverMultimedier() {
    for (let i = 0; i <= AVIdListe.length - 1; i++) {
        if (erSynlig(AVIdListe[i])) {
            AVIndholdsliste[i].loop = true;
            AVIndholdsliste[i].play();
        } else {
            AVIndholdsliste[i].pause();
            AVIndholdsliste[i].currentTime = 0;

        }
    }

}


function aktiverTekstAnimation() {
    for (let i = 0; i <= tekstIdListe.length - 1; i++) {
        if (erSynlig(tekstIdListe[i])) {
            document.getElementById(tekstIdListe[i]).classList.add("roll-in-right");

        } else {
            document.getElementById(tekstIdListe[i]).classList.remove("roll-in-right");
        }
    }
}


//HOVEDPROGRAM


const tekstIdListe = ["tekst1", "tekst2", "tekst3", "tekst4"];
window.addEventListener("scroll", function () {
    aktiverTekstAnimation();
    aktiverMultimedier();
});




const AVIdListe = ["paris", "istanbul", "firenze", "video"];
const AVIndholdsliste = ["Bouncy_Fun1.mp3", "Walker.mp3", "Funky_Groove.mp3", "video"];

AVIndholdsliste[0] = new Audio("Bouncy_Fun1.mp3")
AVIndholdsliste[1] = new Audio("Walker.mp3")
AVIndholdsliste[2] = new Audio("Funky_Groove.mp3")
AVIndholdsliste[3] = document.getElementById("video");
