const container = document.getElementById("container");
let button = document.getElementById("reset");
let array = container.getElementsByTagName("div");
let popUp = prompt("How many squares do you want?");
let select = document.getElementById("color");
let rgb = document.getElementById("rgb");
let rand = false;
makeRows(popUp);
rgb.addEventListener("click", () => {
  rand = true;
});

function makeRows(rows) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', rows);
  for (i = 0; i < (rows * rows); i++) {
    let cell = document.createElement("div");
    cell.innerText = " ";
    container.appendChild(cell).className = "grid-item";
  };
};

container.addEventListener('mouseover', (e) => {
  if(rand === true){
    e.target.style.backgroundColor = randomColor();
  } else {
    e.target.style.backgroundColor = "blue";
  }
});

button.addEventListener('click', () => {
  rand = false;
  popUp = prompt("How many squares do you want?");
  if (popUp <= 100 && popUp > 0) {
    makeRows(popUp);
  }else {
    popUp = prompt("The maximum is 100, choose lower number")
  }
  container.innerHTML = "";
  makeRows(popUp);
})

rgb.addEventListener('click', () => {
  if (popUp <= 100 && popUp > 0) {
    makeRows(popUp);
  }else {
    popUp = prompt("The maximum is 100, choose lower number")
  }
  container.innerHTML = "";
  makeRows(popUp);
});

function randomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

