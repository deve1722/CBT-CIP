// Get the DOM elements
const form = document.getElementById('create-event-form');
const eventsContainer = document.getElementById('events-container');

// Event handler for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const eventLocation = document.getElementById('event-location').value;

    if (eventName && eventDate && eventTime && eventLocation) {
        const newEvent = {
            name: eventName,
            date: eventDate,
            time: eventTime,
            location: eventLocation
        };

        // Add event to the list
        addEventToList(newEvent);

        // Clear form inputs
        form.reset();
    } else {
        alert("Please fill out all fields.");
    }
});

// Function to display the event on the page
function addEventToList(event) {
    const eventItem = document.createElement('li');
    eventItem.classList.add('event-item');
    eventItem.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Time:</strong> ${event.time}</p>
        <p><strong>Location:</strong> ${event.location}</p>
    `;
    eventsContainer.appendChild(eventItem);
}
