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

     elModalInnerWrapper.innerHTML = `
     <form class="w-[915px] mx-auto">
         <label class="inline-block w-[full] mb-[33px] flex justify-center">
             <input type="file" class="hidden"/>
             <img src="./images/imageD.png" alt="Just Image" width="500" height="200"/>
         </label>
     <div class="flex justify-between">
        <div class="w-[49%]">
           <label>
           <span class="text-[20px] mb-[9px] text-[#898989] leading="32px" ">Категории</span>
              <select class="w-full py-[15px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none">
                <option value="0">Каркасные</option>
                <option value="1">Надувные</option>
             </select>
           </label>
        </div>
         <div class="w-[49%]">
        
        </div>
     </div>
    </form>
     `
}
//  Add Modal Open end