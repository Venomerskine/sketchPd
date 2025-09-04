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
    const divSize = `calc(100% / ${num})`

    for (let i = 1; i <= num * num; i++){
    const div = document.createElement("div")
        div.style.width = divSize
        div.style.height = divSize
        div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "#121b1b"
        div.style.color = "#0bcca2"
        
    })
    cont.appendChild(div)
   
}
})



