let element = document.getElementById("level");
let level = 0;
while (element) {
    level++;
    element = element.parentElement;
}

// Display the result
alert(`The level of the element is: ${level}`);