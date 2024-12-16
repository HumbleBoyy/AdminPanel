let elToggleBtn = document.querySelector(".toggleBtn")

elToggleBtn.addEventListener("click", ()=> {

    document.body.classList.toggle('darkMode')

    if(document.body.classList.contains('darkMode')){
        localStorage.setItem('theme', 'dark')
    }else{
        localStorage.setItem('theme', 'light')
    }
})

window.addEventListener('load', ()=> {
    const savedTheme = localStorage.getItem('theme')

    if(savedTheme === 'dark'){
        document.body.classList.add('darkMode')
    }
})