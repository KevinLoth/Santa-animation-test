"use strict";


const btnKL = document.querySelector(".b1KL");
const santaKL = document.querySelector(".SantaKL");
const audio1KL = document.querySelector("#myAudioKL");
const audio2KL = document.querySelector("#myAudio2KL");
// Click animation Santa + audio play on background.
btnKL.addEventListener("click", ()=>{
    moveKL();
    jinglesKL();
    soundKL();
});
// Animaton Santa left to right
function moveKL(){
    const keyframes = [
        {
            left : "-100%"
        },
        {
            left : 0
        },
        {
            left : "100%"
        }
    ];
    const options = {
        duration : 4000,
        iterations : 1,
        fill: "forwards"
    }
    santaKL.animate(keyframes, options);
}
// 1st audio
function jinglesKL(){
    audio1KL.play();
}
// 2nd audio
function soundKL(){
    setTimeout(()=> {
        audio2KL.play()
    }, 2000)
}