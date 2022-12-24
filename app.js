let play = document.querySelector(".img-play");
let video = document.querySelector('.video-about');
let pause = document.querySelector(".svg-pause")

play.onclick = function () {
    // if (video.play()) {
    //     video.play()
    // };
    // play.style.opacity = '0'
    // if (video.pause()) {
    //     video.play();
    // }
    if (video.paused === true) {
        video.play()
        play.style.display = 'none'
        pause.style.display = 'block'
    }
    // else {
    //     video.pause()
    // }
    if(video.paused === false) {
        pause.onclick = function (){
            video.pause();
            play.style.display = 'block';
            pause.style.display = 'none';
        }
    }
}

// pause.onclick = function () {
//     video.play()
// }


// video.onmouseout = function () {
//     pause.style.display = 'block'
// }


