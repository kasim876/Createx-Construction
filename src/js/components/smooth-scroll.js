// smooth scroll

document.querySelector(".to-top").addEventListener("click", (e) => {
  e.preventDefault()
  
  scroll({
    top: 0,
    behavior: "smooth",
  })
})