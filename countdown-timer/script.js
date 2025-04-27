function startCounter() {
    let seconds = parseInt(document.getElementById('secondsInput').value) || 0;
    let minutes = parseInt(document.getElementById('minutesInput').value) || 0;
    let hours = parseInt(document.getElementById('hourInput').value) || 0;

    if (hours > 24 || seconds < 0 || minutes < 0 || hours < 0) {
        alert('Please enter valid time (Hours < 25 and non-negative).');
        return;
    }

    minutes += Math.floor(seconds / 60);
    seconds = seconds % 60;

    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;

    const timer = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert('Time\'s up!');
        } else {
            if (seconds > 0) {
                seconds--;
            } else {
                if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
            }

            console.log(`Time left: ${hours}h ${minutes}m ${seconds}s`);
        }
    }, 1000);
}
