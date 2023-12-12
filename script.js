function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeTextColor(elementId) {
    const changingText = document.getElementById(elementId);
    const newColor = getRandomColor();
    changingText.style.textShadow = `3px 1px 3px black, 0 0 25px ${newColor}, 0 0 25px ${newColor}`;
}

var i = 0;
var txt = '"Hi, my name is Govinda and I am a passionate Web Developer"';
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
