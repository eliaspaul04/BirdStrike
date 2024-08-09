function setLevel(selectedLevel) {
    level = selectedLevel;
    initializeGame();
}

function initializeGame() {
    if (isLoggedIn()) {
        plane = new Plane(70, 50, "../Images/Plane.gif", context, 50, 120);
        birds = [];

        for (let i = 0; i < 8; i++) {
            let x, y;
            do {
                x = canvas.width + Math.floor(Math.random() * 200);
                y = Math.floor(Math.random() * canvas.height);
            } while (checkOverlap(x, y));

            birds[i] = new Bird(30, 30, "../Images/Bird.png", context, x, y);
            birds[i].speed = 7 + level;
            birds[i].passed = false; // Add this line
            birds[i].scoreValue = 900;
        }

        time = 900 - (level * 130);
        seconds = Math.floor(time / 50);

        document.getElementById("level").innerHTML = "Level: " + level;
    } else {
        redirectToLogin();
    }
}