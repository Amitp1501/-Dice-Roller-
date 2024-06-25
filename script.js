function rollDice() {
    const numOfDice = document.getElementById("numofdice").value; // Consistent camelCase
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = []; // Corrected spelling to 'images'

    const animations = ["rollDice", "bounceDice", "zoomDice", "flipDice"];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        const randomAnimation =
            animations[Math.floor(Math.random() * animations.length)];
        images.push(
            `<img src="images/${value}.png" alt="Dice showing ${value}" class="dice" style="animation: ${randomAnimation} 1s ease-in-out;">`
        ); // Added alt text for accessibility
    }

    // Update the text content with the results of the dice rolls
    diceResult.textContent = `Dice: ${values.join(", ")}`;

    // Update the dice images
    diceImages.innerHTML = images.join(" ");

    // Reapply animation styles
    const diceElements = document.querySelectorAll(".dice");
    diceElements.forEach((dice) => {
        dice.style.animation = "none";
        dice.offsetHeight; // Trigger reflow
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        dice.style.animation = `${randomAnimation} 1s ease-in-out`;
    });
}
