let userName = document.querySelector(".username")
const user = JSON.parse(localStorage.getItem("user"))
userName.textContent = user.username


let elCategory1 = document.querySelector(".category1")
let elCategory2 = document.querySelector(".category2")
let elModalWrapper = document.querySelector(".modalWrapper")
let elModalInnerWrapper = document.querySelector(".innerModalWrapper")

elCategory1.addEventListener("click", ()=> {
   elCategory1.className = "category1 text-[35px] text-[#009398] font-bold border-b-[3px] border-[#009398]"
   elCategory2.className = "category2 text-[35px] text-[#A6A6A6] font-bold border-b-[3px] border-transparent"
})

elCategory2.addEventListener("click", ()=> {
    elCategory1.className = "category1 text-[35px] text-[#A6A6A6] font-bold border-b-[3px] border-transparent"
    elCategory2.className = "category1 text-[35px] text-[#009398] font-bold border-b-[3px] border-[#009398]"
 })


// ElModal Close start
elModalWrapper.addEventListener("click", (e)=> {
     if(e.target.id === "wrapper"){
        elModalWrapper.classList.add("scale-0")
     }
})
// ElModal Close start

//  Add Modal Open start
function handleAddClickBtn(){
     elModalWrapper.classList.remove("scale-0")
}
//  Add Modal Open end