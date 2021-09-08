var isSettingsOpen = false;

// Misc Tools
function randint(lower, upper) {
    return Math.floor(Math.abs(Math.random() * (upper - lower)) + lower);
}

// Open Settings Menu
function settingsMenu() {
    isSettingsOpen = !isSettingsOpen;
    for (let i = 0; i < document.getElementsByClassName("settings").length; i++) {
        document.getElementsByClassName("settings")[i].style.visibility = isSettingsOpen ? "visible" : "hidden";
    }
}

// Tab Cloak Script
function cloakTitle() {
    let title = document.getElementById("titlecloak").value;
    document.title = title == "" ? "Netcade" : title;
}
function cloakIcon(id) {
    let icon = document.getElementById("favicon")
    if (id == 1) {
        icon.setAttribute("href", window.location.pathname.split("/")[window.location.pathname.split("/").length - 1].startsWith("game_") ? "../assets/googleicon.ico" : "assets/googleicon.ico");
    } else if (id == 2) {
        icon.setAttribute("href", window.location.pathname.split("/")[window.location.pathname.split("/").length - 1].startsWith("game_") ? "../assets/googledriveicon.png" : "assets/googledriveicon.png");
    } else if (id == 3) {
        icon.setAttribute("href", window.location.pathname.split("/")[window.location.pathname.split("/").length - 1].startsWith("game_") ? "../assets/googleclassroomicon.png" : "assets/googleclassroomicon.png");
    }
}

// Panic Script
function panic() {
    window.open("https://classroom.google.com");
    document.getElementById("favicon").setAttribute("href", "assets/googleicon.ico");
    document.title = "Google";
}

// Games library search and shuffle script
function searchForGame() {
    var query = document.getElementById("gamesearchbox").value.toLowerCase();
    var db = document.getElementById("gamedatabase").getElementsByTagName("a");
    var resultsSpan = document.getElementById("gamesearchresultscounter");
    var results = 0;
    for (let i = 0; i < db.length; i++) {
        db[i].style.display = "none";
        if (db[i].getAttribute("id").split("_")[1].includes(query)) {
            db[i].style.display = "inline-block";
            results++;
        }
    }
    resultsSpan.innerText = "Results: " + results.toString();
    resultsSpan.style.visibility = query == "" ? "hidden" : "visible";
}