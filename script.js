const plasmidNameInput = document.getElementById("plasmid-name");
const plasmidSizeInput = document.getElementById("plasmid-size");

const plasmidNameDisplay = document.getElementById("plasmid-name-display");
const plasmidSizeDisplay = document.getElementById("plasmid-size-display");

plasmidNameInput.addEventListener("input", function () {

    const name = plasmidNameInput.value;

    if (name.trim() === "") {
        plasmidNameDisplay.textContent = "My Plasmid";
    } else {
        plasmidNameDisplay.textContent = name;
    }

});

plasmidSizeInput.addEventListener("input", function () {

    const size = plasmidSizeInput.value;

    if (size.trim() === "") {
        plasmidSizeDisplay.textContent = "5,000 bp";
    } else {
        plasmidSizeDisplay.textContent =
            Number(size).toLocaleString() + " bp";
    }

});
