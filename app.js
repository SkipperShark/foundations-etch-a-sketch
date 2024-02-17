let changeButton = document.querySelector("#input");
let gridContainer = document.querySelector("#gridContainer");

let numGridItemsPerSide = 4;

// initialization
fillGridContainerWithGridItems(numGridItemsPerSide);

changeButton.addEventListener("click", (event) => {
    numGridItemsPerSide = prompt("How many squares per side?");
    fillGridContainerWithGridItems(numGridItemsPerSide);
    document.querySelector("#numSquareDisplay").textContent = numGridItemsPerSide;
})

// console.log(`numGridItemsPerSide : ${numGridItemsPerSide}`);
// console.log(`numberOfGridItems : ${numberOfGridItems}`);




function fillGridContainerWithGridItems(numGridItemsPerSide) {

    let numberOfGridItems = numGridItemsPerSide ** 2;
    // Clear existing grid container
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild)
    }

    //fill grid container with grid items

    for (let i = 0; i < numberOfGridItems; i++) {
        let gridItem = document.createElement("div");
        gridItem.className = "gridItem";
        // gridItem.textContent = i;
        gridContainer.appendChild(gridItem);
        gridItem.style.flex = `1 0 ${100 / numGridItemsPerSide}%`;

        gridItem.addEventListener("mouseenter", (event) => {
            gridItem.style.backgroundColor = getRandomCSSRGBValue();
        })

        gridItem.addEventListener("mouseleave", (event) => {
            gridItem.style.backgroundColor = getRandomCSSRGBValue();
        })
    }

    // helper functions
    function getRandomCSSRGBValue() {
        return `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * 255);
    }
}



