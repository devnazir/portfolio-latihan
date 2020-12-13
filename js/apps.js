const square = document.querySelector(".square");
const navSquare = document.querySelector(".nav-square");
const links = document.querySelectorAll(".on-hover");
const header = document.querySelector(".header");
const headerName = document.querySelector(".header-name");
const eventWindow = window.addEventListener;


let checkHover = false;

function mouseMoveEffect(e) {
    let x = e.x;
    let y = e.y;
    if (checkHover) {
        square.style.cssText = `transform: matrix(1, 0, 0, 1, ${x}, ${y}) !important; filter: invert(1)`;
        return;
    }
    square.style.cssText = `transform: matrix(1, 0, 0, 1, ${x}, ${y}); transition: 1s ease-out; filter: invert(0)`;
    navSquare.style.cssText = `background-image: linear-gradient(${x / 3}deg , rgb(255, 255, 255), rgb(0, 0, 0)) !important`;
}

function hoverLink(e) {
    checkHover = true;
    const link = this.getBoundingClientRect();
    if (this.classList.contains("nav-square")) {
        return;
    }

    const { left, top, right, bottom, width, height } = link;
    const border = document.querySelector(".border");
    border.style.cssText = `left: ${left}px; top: ${top}px; right: ${right}px; bottom: ${bottom}px; width: ${width}px; height: ${height}px; opacity: 1`;
    mouseMoveEffect(e);
}

function changeContent() {
    const container = document.querySelector(".container .content");
    const content = this.dataset.content;
    let el = document.getElementById(content).innerHTML;
    container.innerHTML = el;
    console.log(el)
}

links.forEach(link => {
    link.addEventListener("mouseenter", hoverLink);
    link.addEventListener("mouseleave", () => checkHover = false);
    link.addEventListener("click", changeContent);
});

eventWindow("mousemove", mouseMoveEffect);





