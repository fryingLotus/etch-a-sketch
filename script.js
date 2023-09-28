const grid = document.querySelector("#grid");
const rainbow = document.querySelector("#rainbow");
const clear = document.querySelector("#clear");
const defaultBtn = document.querySelector("#default");
const pickColor = document.querySelector("#pickColor");
let checkRainbow = false;
let checkDefault = true;
let checkColor = false;
// old code
// function updateOutput(range) {
//   let output = document.getElementById("range_weight_disp");
//   grid.innerHTML = "";
//   let row, col;
//   if (range.value <= 50) {
//     output.value = "4x4";
//     row = col = 4;
//   } else if (range.value <= 64) {
//     output.value = "8x8";
//     row = col = 8;
//   } else if (range.value <= 144) {
//     output.value = "12x12";
//     row = col = 12;
//   } else if (range.value <= 256){
//     output.value = "16x16";
//     row = col = 16;
//   } else if(range.value <= 400){
//     output.value = "20x20";
//     row = col = 20;

//   } else {
//     output.value = "30x30";
//     row = col = 30;
//   }
//   makeGrid(row, col);
// }
function updateOutput(range) {
  let output = document.getElementById("range_weight_disp");
  grid.innerHTML = "";
  let size = Math.floor(range.value / 100) + 1;
  output.value = `${size}x${size}`;
  makeGrid(size, size);
}

function makeGrid(row, col) {
  grid.style.gridTemplateColumns = `repeat(${col},1fr)`;
  grid.style.gridTemplateRows = `repeat(${row},1fr)`;
  for (let i = 0; i < row * col; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cellStyle");
    grid.append(cell);
  }
}

defaultBtn.addEventListener('click',function()
{
    checkDefault = true;
    checkRainbow = false;
    checkColor = false;
});
pickColor.addEventListener('click',function()
{
    checkDefault = false;
    checkRainbow = false;
    checkColor = true;
    
});
rainbow.addEventListener("click", function () {
  // add a click event listener
 checkRainbow = true; // toggle the flag value
 !checkColor;
 !checkDefault;
 
});

grid.addEventListener("mouseover", (event) => {
  // if (event.target.classList.contains('cellStyle')){
  //     event.target.style.backgroundColor = "red";
  // }
  if (event.target.classList.contains("cellStyle")) {
    if (checkRainbow == true) {
      event.target.style.backgroundColor = `#${getRgb()}`;
      console.log(checkRainbow);
    } else if (checkDefault == true) {
      event.target.style.backgroundColor = "black";
      console.log(checkRainbow);
    } else if (checkColor == true){
      colorValue = pickColor.value;
      event.target.style.backgroundColor = colorValue;
        console.log(checkColor);
        console.log(colorValue);
    }
  }
});

function clearGrid() {
  const cells = document.querySelectorAll(".cellStyle");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "#ffffff";
  });
}

clear.addEventListener("click", clearGrid);

function getRgb() {
  let r = Math.floor(Math.random() * 256).toString(16);
  let g = Math.floor(Math.random() * 256).toString(16);
  let b = Math.floor(Math.random() * 256).toString(16);
  return `${r}${g}${b}`;
}
// test.addEventListener(
//     "mouseover",
//     (event) => {
//       // highlight the mouseover target
//       event.target.style.color = "purple";


//     },
//     false
//   );
window.onload = function(){
    makeGrid(12,12);
    
}
