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
   renderProducts(productList, elTbodyProducts, "0")
})

elCategory2.addEventListener("click", ()=> {
    elCategory1.className = "category1 text-[35px] text-[#A6A6A6] font-bold border-b-[3px] border-transparent"
    elCategory2.className = "category1 text-[35px] text-[#009398] font-bold border-b-[3px] border-[#009398]"
    renderProducts(productList, elTbodyProducts, "1")
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
         category_id:event.target.category_id.value,
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
         renderProducts(productList, elTbodyProducts, data.category_id)
         elModalWrapper.classList.add("scale-0")

         if(data.category_id === "0"){
               elCategory1.className = "category1 text-[35px] text-[#009398] font-bold border-b-[3px] border-[#009398]"
               elCategory2.className = "category2 text-[35px] text-[#A6A6A6] font-bold border-b-[3px] border-transparent"
         }else{
               elCategory2.className = "category1 text-[35px] text-[#009398] font-bold border-b-[3px] border-[#009398]"
               elCategory1.className = "category2 text-[35px] text-[#A6A6A6] font-bold border-b-[3px] border-transparent"
         }
      },1000)

     
   })
}
//  Add Modal Open end

// Render Products start
function renderProducts(arr,list, categoryId){
   list.innerHTML = null

  
   arr.filter(item => item.category_id === categoryId).forEach(item => {
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
                <td class="py-[7px] text-[20px]">${item.category_id == "0" ? "Каркасные" : "Надувные"}</td>
               <td class="py-[7px]">
                  <div class="flex items-center gap-[18px]">
                        <button onclick="handleEditBtn(${item.id})"><img src="./images/edit.svg" alt="edit img" width="20" height="20"></button>
                        <button onclick="handleDelete(${item.id})"><img src="./images/delete.svg" alt="delete img"  width="22" height="22"></button>
                  </div>
            </td>
      `

      list.append(elTr)
   })
}

renderProducts(productList, elTbodyProducts, "0")
// Render Products end
console.log(productList);




// Delete Button start
 function handleDelete(id){
   const deletedItem = productList.findIndex(item=> item.id === id)
   productList.splice(deletedItem, 1)
   localStorage.setItem("products", JSON.stringify(productList))
   renderProducts(productList, elTbodyProducts)
 }
// Delete Button end


// Edit Button start
function handleEditBtn(id){
   elModalWrapper.classList.remove("scale-0")

   let editProduct = productList.find(item => item.id === id)
   elModalInnerWrapper.innerHTML = `
   <form class="edit_form w-[915px] mx-auto">
       <label class="inline-block w-[full] mb-[5px] flex justify-center">
           <input  type="file" class="editChooseImage hidden"/>
           <img class="error_image edit_image" src="${editProduct.image}" alt="Just Image" width="400" height="100"/>
       </label>
   <div class="flex justify-between">
      <div class="w-[49%]">
         <label>
         <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Категории</span>
            <select name="category_id" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none">
              <option ${editProduct.category_id === "0" && "selected"} value="0">Каркасные</option>
              <option ${editProduct.category_id === "1" && "selected"} value="1">Надувные</option>
           </select>
         </label>
         <label>
         <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Стартая цена (сум) </span>
            <input value=${editProduct.price}  type="number" name="price" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="2500000"/>
         </label>
          <label>
         <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Рамка</span>
            <input value=${editProduct.frame} type="text" name="frame" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="10"/>
         </label>
          <label>
         <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Размер (м)</span>
            <input value=${editProduct.size} type="text" name="size" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="Размер (м)"/>
         </label>
      </div>
       <div class="w-[49%]">
         <label>
         <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Статус</span>
            <select  name="recommendation" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none">
              <option ${editProduct.recommendation === "0" && "selected"} value="0">Рекомендуем</option>
              <option ${editProduct.recommendation === "1" && "selected"} value="1">Cкидка</option>
              <option ${editProduct.recommendation === "2" && "selected"} value="2">Нет в наличии</option>
           </select>
         </label>
         <label>
         <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Количество</span>
            <input value=${editProduct.quantity} type="number" name="quantity" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="10"/>
         </label>
          <label>
         <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Цена со скидкой (сум) </span>
            <input value=${editProduct.discount_price} type="text" name="discount_price" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="10"/>
         </label>
          <label>
         <span class="text-[15px] mb-[9px] text-[#898989] leading="32px" ">Глубина(см)</span>
            <input value=${editProduct.depth} type="text" name="depth" class="w-full p-[12px] rounded-[5px] bg-slate-100 shadow-xl text-[25px] text-[#545454] outline-none" placeholder="Глубина(см)"/>
         </label>
      </div>
   </div>
    <div class="flex justify-center items-center mt-5">
       <button type="submit" class="editModalBtn w-[222px] h-[45px] bg-[#009398] text-white rounded-[30px] shadow-md shadow-slate-300 flex justify-center items-center">Редактировать</button>
    </div>
  </form>
   `
   let elChooseImageFile = document.querySelector(".editChooseImage")
   let elEdit_Image = document.querySelector(".edit_image")
   elChooseImageFile.addEventListener("change", (event)=> {
      elEdit_Image.src =  URL.createObjectURL(event.target.files[0])
   })

   let elEditModalBtn = document.querySelector(".editModalBtn")
   let elEditForm = document.querySelector(".edit_form")
   elEditForm.addEventListener("submit", (event)=> {
      event.preventDefault()
      editProduct.image = elEdit_Image.src
      editProduct.category_id = event.target.category_id.value
      editProduct.price = event.target.price.value
      editProduct.frame = event.target.frame.value
      editProduct.size = event.target.size.value
      editProduct.recommendation = event.target.recommendation.value
      editProduct.quantity = event.target.quantity.value
      editProduct.discount_price = event.target.discount_price.value
      editProduct.depth = event.target.depth.value
 
      elEditModalBtn.innerHTML = `<img class="scale-[1.2]" src="./images/loader.png" alt="loader" width="50" height="50">`
      setTimeout(()=> {
         elModalWrapper.classList.add("scale-0")
         renderProducts(productList, elTbodyProducts, editProduct.category_id)
         localStorage.setItem("products", JSON.stringify(productList))
        
        

         // if(data.category_id === "0"){
         //       elCategory1.className = "category1 text-[35px] text-[#009398] font-bold border-b-[3px] border-[#009398]"
         //       elCategory2.className = "category2 text-[35px] text-[#A6A6A6] font-bold border-b-[3px] border-transparent"
         // }else{
         //       elCategory2.className = "category1 text-[35px] text-[#009398] font-bold border-b-[3px] border-[#009398]"
         //       elCategory1.className = "category2 text-[35px] text-[#A6A6A6] font-bold border-b-[3px] border-transparent"
         // }
      },1000)
   })

 


   let elErrorImage = document.querySelector(".error_image")
    elErrorImage.addEventListener("error", (e)=> {
      e.target.src = "./images/imageD.png"
   })
}
// Edit Button end