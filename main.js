const title = document.querySelector("h1");
title.style.color = "navy";
console.log(title);

function handleTitleClick() {
    // console.log("Title was Clicked !");
    title.style.color = "blue";     // suuuuper cool & sexy event ! ㅋㅋ
}

function handleMouseEnter() {
    // console.log("mouse is here!");
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "purple";
}

function handleWindowCopy() {
    alert("copier !")
}

function handleWindowOffline() {
    alert("Sos no WIFI !")
}

function handleWindowOnline() {
    alert("All Good !")
}



title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);