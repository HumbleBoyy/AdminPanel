let elLoginForm = document.querySelector(".login_form")
let elLoginBtn = document.querySelector(".login_btn")


elLoginForm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const data = {
        username: e.target.username.value,
        password: e.target.password.value
    }
    elLoginBtn.innerHTML = `<img class="scale-[1.2]" src="./images/loader.png" alt="loader" width="50" height="50">`
    if(data.username === "Asadulloh" && data.password === "123"){
        setTimeout(()=> {
            elLoginBtn.innerHTML = `Войти`
            location.pathname = "./products.html"
        },1000)
    }else{
        setTimeout(()=> {
            elLoginBtn.classList.add("redBg")
            elLoginBtn.innerHTML = `Неправильный пароль`
        },1000)
        setTimeout(()=> {
            elLoginBtn.classList.remove("redBg")
            elLoginBtn.innerHTML = `Войти`
        },3500)
    }
})