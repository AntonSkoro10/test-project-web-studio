const openWindow = () => {
   const window = document.getElementById("open-mobile-menu-window")
   window.style.display = "block"
 }

 const closeWindow = () => {
   const window = document.getElementById("open-mobile-menu-window")
   window.style.display = "none"
 }

 const openBurgerWindow = document.getElementById("open-window")
  openBurgerWindow.addEventListener("click", () => {
   const window = document.getElementById("open-mobile-menu-window")
   if (window.style.display === "none" || window.style.display === "") {
     openWindow()
   } else {
     closeWindow()
   }
  })

const closeButton = document.getElementById("close-window")
closeButton.addEventListener("click", closeWindow)               