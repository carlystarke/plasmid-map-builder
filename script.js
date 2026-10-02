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

const addComponentButton = document.getElementById("add-component");
const componentTypeInput = document.getElementById("component-type");
const componentNameInput = document.getElementById("component-name");
const plasmidComponents = document.getElementById("plasmid-components");

const components = [];

addComponentButton.addEventListener("click", function () {

    alert("Add Component clicked!");

    const type = componentTypeInput.value;
    const name = componentNameInput.value;

    if (name.trim() === "") {
        alert("Please enter a component name.");
        return;
    }

    components.push({
        type: type,
        name: name
    });

    drawComponents();

    componentNameInput.value = "";

 });

function drawComponents() {

    plasmidComponents.innerHTML = "";

    const radius = 150;
    const circumference = 2 * Math.PI * radius;

    const segmentLength = circumference / components.length;

    components.forEach(function (component, index) {

        const circle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

        circle.setAttribute("cx", "250");
        circle.setAttribute("cy", "250");
        circle.setAttribute("r", radius);
        circle.setAttribute("fill", "none");
        circle.setAttribute("stroke-width", "30");

        circle.setAttribute(
            "stroke-dasharray",
            `${segmentLength} ${circumference - segmentLength}`
        );

        circle.setAttribute(
            "stroke-dashoffset",
            -index * segmentLength
        );

        circle.setAttribute(
            "transform",
            "rotate(-90 250 250)"
        );

        circle.setAttribute(
            "stroke",
            getComponentColor(component.type)
        );

        plasmidComponents.appendChild(circle);

    });

}

function getComponentColor(type) {

    const colors = {
        "Promoter": "#2563eb",
        "Enhancer": "#7c3aed",
        "Signal Peptide": "#0891b2",
        "Coding Sequence": "#16a34a",
        "Linker": "#65a30d",
        "Reporter": "#ca8a04",
        "Selection Marker": "#ea580c",
        "Poly(A) Signal": "#dc2626",
        "Origin of Replication": "#db2777",
        "Other": "#6b7280"
    };

    return colors[type] || "#6b7280";
}
