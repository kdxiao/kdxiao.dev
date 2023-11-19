document.addEventListener('DOMContentLoaded', function() {
    var messageElement = document.getElementById('greeting-message');
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
	
	if (currentHour < 6) {
		messageElement.textContent = 'Good... Evening? Morning? Who\'s viewing my website this late at night?';
	} else if (currentHour < 12) {
        messageElement.textContent = 'Good morning!';
    } else if (currentHour < 18) {
        messageElement.textContent = 'Good afternoon!';
    } else {
        messageElement.textContent = 'Good evening!';
    }
});
