let userName = document.querySelector(".username")
let elCategory1 = document.querySelector(".category1")
let elCategory2 = document.querySelector(".category2")

const user = JSON.parse(localStorage.getItem("user"))
userName.textContent = user.username