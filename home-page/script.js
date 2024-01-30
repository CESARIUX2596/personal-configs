window.onload = function() {
    function updateTimeReference() {
        var date = new Date();
        var currentHour = date.getHours();
        var timeReference;

        if (currentHour < 12) {
            timeReference = 'Morning';
        } else if (currentHour< 18) {
            timeReference = 'Afternoon';
        } else {
            timeReference = 'Evening';
        }

        document.getElementById('time-reference').innerText = timeReference;
    }

    function updateClock() {
        var now = new Date();
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var date = now.toLocaleDateString('en-US', options);
        var time = now.toLocaleTimeString();
        document.querySelector('.time').innerText = time;
        document.querySelector('.date').innerText = date;
    }

    updateTimeReference();
    updateClock();

    setInterval(updateClock, 1000);
};
