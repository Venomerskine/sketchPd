const cont = document.getElementById("container")
const pxlBtn = document.getElementById("pxlBtn")

pxlBtn.addEventListener("click", () => {
    let num = prompt("Enter number of pixels. Not more than 100:")
    num = Number(num)
     if (!isNaN(num) && num <= 100 && num > 0) {
      alert("You entered: " + num);
    } else {
      alert("Invalid input. Please enter a number between 1 and 100.");
    }
})

for (let i = 1; i <= 16 * 16; i++){
    const div = document.createElement("div")
    div.textContent = i
     div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "#121b1b"
        div.style.color = "#0bcca2"
    })
    cont.appendChild(div)
   
}

