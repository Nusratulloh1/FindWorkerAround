const startingMinutes = 1
var time = startingMinutes * 60

const countdownEl = document.getElementById('vaqt')
setInterval(updateCountdown, 1000);

          function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 1 ? '0' + seconds : seconds;

        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
    }

