const cont = document.getElementById("container")
const pxlBtn = document.getElementById("pxlBtn")

pxlBtn.addEventListener("click", () => {
    let num = prompt("Enter number of pixels. Not more than 100:")
    num = Number(num)

    cont.innerHTML = '';

     if (!isNaN(num) && num <= 100 && num > 0) {
      alert("You entered: " + num);
    } else {
      alert("Invalid input. Please enter a number between 1 and 100.");
      return
    }
    const divSize = `calc(100% / ${num})`

    for (let i = 1; i <= num * num; i++){
    const div = document.createElement("div")
        div.style.width = divSize
        div.style.height = divSize
        div.addEventListener('mouseenter', () => {
            let currentOpacity = parseFloat(div.dataset.opacity) || 0
            currentOpacity += 0.1
            if (currentOpacity > 1){
                currentOpacity = 0.1
            }
            div.dataset.opacity = currentOpacity

        div.style.backgroundColor =
  `rgb(${Math.floor(Math.random() * 256)}, 
       ${Math.floor(Math.random() * 256)}, 
       ${Math.floor(Math.random() * 256)},
       ${currentOpacity})`;

        div.style.color = "#0bcca2"
        
    })
    cont.appendChild(div)
   
}
})



