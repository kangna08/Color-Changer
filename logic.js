const RandomBtn = document.getElementById("RandomBtn");
const card = document.getElementById("card");
const colorName = document.getElementById("colorName");

const colors = [
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "pink",
    "cyan",
    "Crimson",
    "DeepPink",
    "Magenta",
    "LightSeaGreen",
    "MidnightBlue",
    "Brown",
    "DimGray",
];

RandomBtn.addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * colors.length);

    const selectedColor = colors[randomIndex];

    card.style.backgroundColor = selectedColor;

    colorName.innerText = `Current Color: ${selectedColor}`;

});