const container = document.getElementById("container");
let button = document.getElementById("buttonContainer");
let array = container.getElementsByTagName("div");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.innerText = " ";
    container.appendChild(cell).className = "grid-item";
  };
};

container.addEventListener('mouseover', (e) => {
  e.target.classList.add("colorHover");
})

button.addEventListener('click', () => {
  for (i = 0; i < array.length; i++) {
    if (array[i].classList.contains("colorHover")){
      array[i].classList.remove("colorHover")
    }
  }
})

makeRows(16, 16);
