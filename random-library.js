function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}

function randomInt(low, high) {
    return Math.floor(randomDec(low, high));
}

function randomRGB() {
    return `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(0, 256)})`;
}

function randomElement(array) {
    return array[randomInt(0, array.length)];
}