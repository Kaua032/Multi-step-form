const mainOne = document.getElementById("page_one")
const mainTwo = document.getElementById("page_two")
const mainThree = document.getElementById("page_three")

document.getElementById("goToTwo").addEventListener("click", (e) =>{
    e.preventDefault()
    mainOne.style.display = "none"
    mainTwo.style.display = "flex"
})
document.getElementById("go_to_3").addEventListener("click", (e)=>{
    e.preventDefault()
    mainTwo.style.display = "none"
    mainThree.style.display = "flex"
})