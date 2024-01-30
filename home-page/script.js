window.onload = function() {
    // Function to update the time reference (morning, afternoon, evening)
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

    // Function to update the clock
    function updateClock() {
        var now = new Date();
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var date = now.toLocaleDateString('en-US', options);
        var time = now.toLocaleTimeString();
        document.querySelector('.time').innerText = time;
        document.querySelector('.date').innerText = date;
    }

    // Call both functions immediately to set the initial time, date, and time reference
    updateTimeReference();
    updateClock();

    // Set up intervals to update the clock every 1 second
    setInterval(updateClock, 1000);
};
