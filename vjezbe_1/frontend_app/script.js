const API_URL = "https://evently-backend-r4ix.onrender.com";

const eventsContainer = document.getElementById("events");

function displayEvents(events) {
    eventsContainer.innerHTML = "";

    events.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("event-card");

        card.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <p><strong>Datum:</strong> ${event.date}</p>
            <p><strong>Lokacija:</strong> ${event.location}</p>
        `;

        eventsContainer.appendChild(card);
    });
}

async function loadEvents() {
    try {
        const response = await fetch(`${API_URL}/events`);

        if (!response.ok) {
            throw new Error(`HTTP greška: ${response.status}`);
        }

        const events = await response.json();
        displayEvents(events);
    } catch (error) {
        eventsContainer.innerHTML =
            "<p>Greška pri učitavanju događaja. Pokušaj ponovno.</p>";
        console.error(error);
    }
}

loadEvents();