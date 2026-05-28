// DOM

document
document.documentElement
document.head
document.body
document.title
document.domain
document.URL
document.referrer
document.cookie
document.lastModified
document.readyState
document.characterSet
document.contentType

// Methods
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector("#id")
document.querySelector("tag")
document.querySelector("[name='value']")
document.querySelectorAll(".class ul li a")
document.querySelectorAll(".class ul li a").forEach(e => console.log(e))
document.createElement()


// access to attributes
const box = document.querySelector(".box")
box.id
box.className
box.getAttribute("id")
box.dataset.id

// postmessage
window.postMessage("Hello from the parent window!", "*")
window.addEventListener("message", (event) => {
  console.log("Received message:", event.data)
})

// dom events
const button = document.querySelector("button")
button.addEventListener("click", () => {
  console.log("Button clicked!")
})  

// event delegation
const list = document.querySelector("ul")
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("List item clicked:", event.target.textContent)
  }
})
