document.addEventListener("DOMContentLoaded", function() {
    // Load data from JSON files
    loadJSONData("data/menu.json", "menu-content", renderMenu);
    loadJSONData("data/schedule.json", "schedule-content", renderSchedule);
    loadJSONData("data/transport.json", "transport-content", renderTransport);
    loadJSONData("data/announcements.json", "announcements-content", renderAnnouncements);
});

function loadJSONData(url, elementId, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, elementId))
        .catch(error => document.getElementById(elementId).innerHTML = "Error loading data.");
}

function renderMenu(data, elementId) {
    let html = "<ul>";
    data.menu.forEach(item => {
        html += `<li>${item.date}: ${item.meal}</li>`;
    });
    html += "</ul>";
    document.getElementById(elementId).innerHTML = html;
}

function renderSchedule(data, elementId) {
    let html = "<ul>";
    data.schedule.forEach(item => {
        html += `<li>${item.day}: ${item.classes.join(", ")}</li>`;
    });
    html += "</ul>";
    document.getElementById(elementId).innerHTML = html;
}

function renderTransport(data, elementId) {
    let html = "<ul>";
    data.transport.forEach(route => {
        html += `<li>${route.route} - ${route.schedule}</li>`;
    });
    html += "</ul>";
    document.getElementById(elementId).innerHTML = html;
}

function renderAnnouncements(data, elementId) {
    let html = "<ul>";
    data.announcements.forEach(item => {
        html += `<li>${item.date}: ${item.message}</li>`;
    });
    html += "</ul>";
    document.getElementById(elementId).innerHTML = html;
}
