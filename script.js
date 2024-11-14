const stopWatch = document.getElementById('stopwatch');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let hr = 0; 
let min = 0;
let sec = 0;
let milisec = 0;

let timer;

start.addEventListener('click', () => {
    timer = setInterval(() => {
        milisec++;
        stopWatch.textContent = hr + 'h:' + min + 'm:' + sec + 's:' + milisec + 'ms';
        if (milisec >= 100) {
            sec++;
            milisec = 0;
        }

        if (sec >= 60) {
            min++;
            sec = 0;
        }

        if (min >= 60) {
            hr++;
            min = 0;
        }
        timerFunction();
    }, 10);

    function disableBtn(){
        document.getElementById("start").disabled = true;
    };

    disableBtn();

});

stop.addEventListener('click', () => {
    function enableBtn(){
        document.getElementById("start").disabled = false;
    }
    enableBtn();
    
    clearInterval(timer);
    timerFunction();
});

reset.addEventListener('click', () => {
    stopWatch.textContent = "00h:00m:00s:00ms";
    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;
});
