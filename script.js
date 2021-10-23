let _left = 10;
let _top = 10;

//function to move the div to a specific place on the screen
function placeGif() {
    let gif = document.querySelector("#gif");
    gif.style.position = "absolute";
    // we use these variables that are defined in the "global" scope since parsing element.style.left as an int is difficult
    // this goes with our theme of programmers are lazy, do the easier thing...
    gif.style.left = _left+'px';
    gif.style.top = _top+'px';
}

//use event listener on keydown event
document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowLeft") {
        // Left pressed, change value
        _left -= 10;
        placeGif();
    } else if (event.key === "ArrowRight") {
        // Right pressed, change value
        _left += 10;
        placeGif();
    } else if (event.key === "ArrowUp") {
        // Up pressed, change value
        _top -= 10;
        placeGif();
    } else if (event.key === "ArrowDown") {
        // Down pressed, change value
        _top += 10;
        placeGif();
    }
});
