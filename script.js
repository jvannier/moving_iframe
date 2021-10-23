let _left = 10;
let _top = 10;

function placeGif() {
    let gif = document.querySelector("#gif");
    gif.style.position = "absolute";
    gif.style.left = _left+'px';
    gif.style.top = _top+'px';
}

document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowLeft") {
        // Left pressed
        _left -= 10;
        placeGif();
    } else if (event.key === "ArrowRight") {
        // Right pressed
        _left += 10;
        placeGif();
    } else if (event.key === "ArrowUp") {
        // Up pressed
        _top -= 10;
        placeGif();
    } else if (event.key === "ArrowDown") {
        // Down pressed
        _top += 10;
        placeGif();
    }
});
