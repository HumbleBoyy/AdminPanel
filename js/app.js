let userName = document.querySelector(".username")
const user = JSON.parse(localStorage.getItem("user"))
userName.textContent = user.username



let elCategory1 = document.querySelector(".category1")
let elCategory2 = document.querySelector(".category2")
let elModalWrapper = document.querySelector(".modalWrapper")
let elModalInnerWrapper = document.querySelector(".innerModalWrapper")
let elTbodyProducts = document.querySelector(".products_wrapper")

let productList = JSON.parse(localStorage.getItem("products")) || []

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
     <form class="add_form w-[915px] mx-auto">
         <label class="inline-block w-[full] mb-[5px] flex justify-center">
             <input  type="file" class="addChooseImage hidden"/>
             <img src="./images/imageD.png" alt="Just Image" width="400" height="100" class="add_Image"/>
         </label>
     <div class="flex justify-between">
        <div class="w-[49%]">
           <label>
           <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Категории</span>
              <select required name="category_id" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none">
                <option value="0">Каркасные</option>
                <option value="1">Надувные</option>
             </select>
           </label>
           <label>
           <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Стартая цена (сум) </span>
              <input required type="number" name="price" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="2500000"/>
           </label>
            <label>
           <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Рамка</span>
              <input required type="text" name="frame" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="10"/>
           </label>
            <label>
           <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Размер (м)</span>
              <input required type="text" name="size" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="Размер (м)"/>
           </label>
        </div>
         <div class="w-[49%]">
           <label>
           <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Статус</span>
              <select required name="recommendation" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none">
                <option value="0">Рекомендуем</option>
                <option value="1">Cкидка</option>
                <option value="2">Нет в наличии</option>
             </select>
           </label>
           <label>
           <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Количество</span>
              <input required type="number" name="quantity" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="10"/>
           </label>
            <label>
           <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Цена со скидкой (сум) </span>
              <input required type="text" name="discount_price" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="10"/>
           </label>
            <label>
           <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Глубина(см)</span>
              <input required type="text" name="depth" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="Глубина(см)"/>
           </label>
        </div>
     </div>
      <div class="flex justify-center items-center mt-5">
         <button type="submit" class="addModalBtn w-[222px] h-[45px] bg-[#009398] text-white rounded-[30px] shadow-md shadow-slate-300 flex justify-center items-center">Добавить</button>
      </div>
    </form>
     `

     let elChooseImageFile = document.querySelector(".addChooseImage")
     let eladd_Image = document.querySelector(".add_Image")
     elChooseImageFile.addEventListener("change", (event)=> {
       eladd_Image.src =  URL.createObjectURL(event.target.files[0])
     })


   let addForm = document.querySelector(".add_form")
   let elModalBtn = document.querySelector(".addModalBtn")
     addForm.addEventListener("submit", (event)=> {
      event.preventDefault()
      const data = {
         id: productList.length ? productList[productList.length - 1].id + 1 : 1,
         categoryID:event.target.category_id.value,
         price: event.target.price.value,
         image:  eladd_Image.src,
         frame: event.target.frame.value,
         size: event.target.size.value,
         status: event.target.recommendation.value,
         quantity: event.target.quantity.value,
         discount_price: event.target.discount_price.value,
         depth:event.target.depth.value
      }

 
      elModalBtn.innerHTML = `<img class="scale-[1.2]" src="./images/loader.png" alt="loader" width="50" height="50">`
      setTimeout(()=> {
         elModalBtn.innerHTML = `Добавить`
         productList.push(data)
         localStorage.setItem("products", JSON.stringify(productList))
         renderProducts(productList, elTbodyProducts)
         elModalWrapper.classList.add("scale-0")
      },1000)

     
   })
}
//  Add Modal Open end

// Render Products start
function renderProducts(arr,list){
   list.innerHTML = null

  
   arr.map(item => {
      let elTr = document.createElement("tr")
      elTr.innerHTML = `
              <td class="py-[7px]"><img class="mx-auto" src=${item.image} alt="Pool" width="100" height="30"></td>
               <td class="py-[7px] flex flex-col">
                  <span class="before:w-[80%] before:h-[2px] before:rotate-[5deg] before:mt-[5px] rounded-full before:absolute before:bg-red-700 relative text-[12px] text-slate-500 leading-[13px]">${item.price}</span>
                  <strong class="text-[15px] text-black leading-[13px]">${item.discount_price} сум</strong>
               </td>
               <td class="py-[7px] text-[20px]">${item.quantity}</td>
               <td class="py-[7px] text-[20px]">${item.frame}</td>
               <td class="py-[7px] text-[20px]">${item.size}</td>
               <td class="py-[7px] text-[20px]">${item.depth}</td>
               <td class="py-[7px]">
                  <div class="flex items-center gap-[18px]">
                        <button><img src="./images/edit.svg" alt="edit img" width="20" height="20"></button>
                        <button onclick="handleDelete(${item.id})"><img src="./images/delete.svg" alt="delete img"  width="22" height="22"></button>
                  </div>
            </td>
      `

      list.append(elTr)
   })
}

renderProducts(productList, elTbodyProducts)
// Render Products end


// Delete Button start
 function handleDelete(id){
   const deletedItem = productList.findIndex(item=> item.id === id)
   productList.splice(deletedItem, 1)
   localStorage.setItem("products", JSON.stringify(productList))
   renderProducts(productList, elTbodyProducts)
 }
// Delete Button end