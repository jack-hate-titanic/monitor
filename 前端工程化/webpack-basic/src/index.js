import "./index.css";
function component() {
  var element = document.createElement("div");

  element.innerHTML = "<div class='container'>Hello Webpack</div>";

  return element;
}

document.body.appendChild(component());
