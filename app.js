let changeButton = document.querySelector("#input");
let gridContainer = document.querySelector("#gridContainer");
let defaultLightness = 66;
let defaultHue = 0;
let defaultSaturation = 0
let defaultHSL = buildHSLString(defaultHue, defaultSaturation, defaultLightness);

let numGridItemsPerSide = 4;

// initialization
fillGridContainerWithGridItems(numGridItemsPerSide);

changeButton.addEventListener("click", (event) => {
    numGridItemsPerSide = prompt("How many squares per side?");
    fillGridContainerWithGridItems(numGridItemsPerSide);
    document.querySelector("#numSquareDisplay").textContent = numGridItemsPerSide;
})


function fillGridContainerWithGridItems(numGridItemsPerSide) {

    let numberOfGridItems = numGridItemsPerSide ** 2;

    // Clear existing grid container
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild)
    }

    //fill grid container with grid items

    for (let i = 0; i < numberOfGridItems; i++) {
        let gridItem = document.createElement("div");

        console.log(defaultHSL);

        gridItem.className = "gridItem";
        gridItem.style.backgroundColor = defaultHSL;

        gridItem.setAttribute("hue", defaultHue);
        gridItem.setAttribute("saturation", defaultSaturation);
        gridItem.setAttribute("lightness", defaultLightness);
        gridItem.setAttribute("hsl", defaultHSL);

        gridItem.style.flex = `1 0 ${100 / numGridItemsPerSide}% `;

        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseenter", (event) => {
            setGridItemBackGroundColor(event.target);
        })

        gridItem.addEventListener("mouseleave", (event) => {
            setGridItemBackGroundColor(event.target);
        })
    }


    function setGridItemBackGroundColor(gridItem) {
        // seenBackgroundColorHSL = gridItem.style.backgroundColor;
        seenBackgroundColorHSL = gridItem.getAttribute("hsl")

        console.log(gridItem.getAttribute("hue"));
        console.log(gridItem.getAttribute("saturation"));
        console.log(gridItem.getAttribute("lightness"));
        console.log(gridItem.getAttribute("hsl"));
        console.log(`seenBackgroundColorHSL : ${seenBackgroundColorHSL}`);

        // if background color is default, then set it to random color
        // if background color is not default, read its lightnessvalue
        // then decrement its lightnessValue
        // set the attribute to new lightness value

        if (seenBackgroundColorHSL === defaultHSL) {
            let randomHue = getRandomInt(359);
            let randomSaturation = getRandomInt(100)
            let randomLightness = getRandomInt(100);

            let newHSL = buildHSLString(randomHue, randomSaturation, randomLightness);

            gridItem.style.backgroundColor = newHSL;

            gridItem.setAttribute("hue", randomHue);
            gridItem.setAttribute("saturation", randomSaturation);
            gridItem.setAttribute("lightness", randomLightness);
            gridItem.setAttribute("hsl", newHSL);
        }

        else {
            let newLightness = gridItem.getAttribute("lightness") - 10;
            let curHue = gridItem.getAttribute("hue");
            let curSaturation = gridItem.getAttribute("saturation");

            let newHSL = buildHSLString(curHue, curSaturation, newLightness);

            gridItem.style.backgroundColor = newHSL;
            gridItem.setAttribute("lightness", newLightness);
            gridItem.setAttribute("hsl", newHSL);
        }
    }
}


function buildHSLString(hue, saturation, lightness) {
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



