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
         <label class="inline-block w-[full] mb-[10px] flex justify-center">
             <input type="file" class="hidden" name="imageUrl"/>
             <img src="./images/imageD.png" alt="Just Image" width="400" height="100"/>
         </label>
     <div class="flex justify-between">
        <div class="w-[49%]">
           <label>
           <span class="text-[20px] mb-[9px] text-[#898989] leading="32px" ">Категории</span>
              <select name="category_id" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none">
                <option value="0">Каркасные</option>
                <option value="1">Надувные</option>
             </select>
           </label>
           <label>
           <span class="text-[20px] mb-[9px] text-[#898989] leading="32px" ">Стартая цена (сум) </span>
              <input type="number" name="price" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="2500000"/>
           </label>
            <label>
           <span class="text-[20px] mb-[9px] text-[#898989] leading="32px" ">Рамка</span>
              <input type="text" name="frame" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="10"/>
           </label>
            <label>
           <span class="text-[20px] mb-[9px] text-[#898989] leading="32px" ">Размер (м)</span>
              <input type="text" name="size" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="Размер (м)"/>
           </label>
        </div>
         <div class="w-[49%]">
           <label>
           <span class="text-[20px] mb-[9px] text-[#898989] leading="32px" ">Статус</span>
              <select name="recommendation" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none">
                <option value="0">Рекомендуем</option>
                <option value="1">Cкидка</option>
                <option value="2">Нет в наличии</option>
             </select>
           </label>
           <label>
           <span class="text-[20px] mb-[9px] text-[#898989] leading="32px" ">Количество</span>
              <input type="number" name="quantity" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="10"/>
           </label>
            <label>
           <span class="text-[20px] mb-[9px] text-[#898989] leading="32px" ">Цена со скидкой (сум) </span>
              <input type="text" name="discount_price" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="10"/>
           </label>
            <label>
           <span class="text-[20px] mb-[9px] text-[#898989] leading="32px" ">Глубина(см)</span>
              <input type="text" name="depth" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="Глубина(см)"/>
           </label>
        </div>
     </div>
      <div class="flex justify-center items-center mt-5">
         <button onclick="handleAddSecondClickBtn()" class="w-[222px] h-[45px] bg-[#009398] text-white rounded-[30px] shadow-md shadow-slate-300">Добавить</button>
      </div>
    </form>
     `
}
//  Add Modal Open end