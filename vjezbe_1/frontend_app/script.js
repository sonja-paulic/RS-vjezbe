
const events = [
    {
        title: "Web Development Workshop",
        date: "15. studenoga 2026.",
        location: "Zagreb",
        description: "Nauči osnove modernog web razvoja kroz praktičnu radionicu."
    },
    {
        title: "AI & Machine Learning",
        date: "20. studenoga 2026.",
        location: "Online",
        description: "Upoznaj umjetnu inteligenciju i mogućnosti strojnog učenja."
    },
    {
        title: "Cybersecurity Conference",
        date: "28. studenoga 2026.",
        location: "Split",
        description: "Otkrij najnovije trendove u računalnoj sigurnosti."
    }
];

const eventsContainer = document.getElementById("events");

function displayEvents() {
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

displayEvents();
