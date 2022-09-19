var dropdowns = document.getElementsByClassName("dropdown");

let style = document.createElement("style");
style.innerHTML = `
@keyframes slidedown {
  from { max-height: 0;     transform-origin: top; transform: scaleY(0.0) }
  to   { max-height: 500px; transform-origin: top; transform: scaleY(1.0) }
}
@keyframes slideup {
  from { max-height: 500px; transform-origin: top; transform: scaleY(1.0) }
  to   { max-height: 0;     transform-origin: top; transform: scaleY(0.0) }
}
`
document.head.appendChild(style);

for(let i = 0; i < dropdowns.length; i++) {
  dropdowns[i].children[1].style.overflow = "hidden";
  dropdowns[i].children[1].style.maxHeight = "0";
  dropdowns[i].children[1].style.transform = "scaleY(0.0)";
  dropdowns[i].children[1].style.transformOrigin = "top";
  dropdowns[i].children[0].onclick = () => {
    let or = document.createElement("span");
    or.innerHTML = "&#9661;";
    let icon = dropdowns[i].children[0].children[0];
    if(icon.innerHTML == or.innerHTML) {
      icon.innerHTML = "&#9651;";
      dropdowns[i].children[1].style.animation = "slidedown 0.5s ease-in-out 0s 1 forwards";
    } else {
      icon.innerHTML = "&#9661;";
      dropdowns[i].children[1].style.animation = "slideup 0.5s ease-in-out 0s 1 forwards";
    }
  }
  dropdowns[i].children[0].children[0].innerHTML = "&#9661;";
}
