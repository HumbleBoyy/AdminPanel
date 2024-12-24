let elUiProducts = document.querySelector(".uIproducts")
let elUiProducts2 = document.querySelector(".uIproducts2")

let elModalWrapper = document.querySelector(".modalWrapper")
let elModalInnerWrapper = document.querySelector(".innerModalWrapper")
let productsData = JSON.parse(localStorage.getItem("products"))

let orderedList = JSON.parse(localStorage.getItem("ordered_products")) || []

let date = new Date()
const orderedDay = `${String(date).split(" ")[4].split(":").splice(0, 2).join(":")} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear() % 100}`
console.log(orderedDay)



function renderProducts(arr, list, id){
  list.innerHTML = null
    arr.filter(item => item.category_id == id).map(item => {
      let elItem = document.createElement("li")
      elItem.className = `w-[340px] relative h-[300px] shadow-xl shadow-slate-500  rounded-tr-[50px] rounded-b-[50px] p-5`
      elItem.innerHTML = `
        <div class="flex justify-center items-center p-5">
            <img class="mb-[17px]" src=${item.image} alt="pool" width="270" height="170">
        </div>
         <div class="flex justify-between items-center">
            <div class="py-[7px] flex flex-col gap-2">
                <span class="before:w-[90%] before:h-[2px] before:rotate-[5deg] before:mt-[5px] rounded-full before:absolute before:bg-red-700 relative text-[15px] text-slate-500 leading-[13px]">${item.discount_price}</span>
                <strong class="text-[15px] text-black leading-[13px]">${item.price}</strong>
             </div>
             <button class="w-[140px] h-[35px]  rounded-tr-[50px] rounded-bl-[50px] bg-[#FFE600] text-[20px]" onclick="handleOrder(${item.id})">Заказать</button>
         </div>
         <button class="w-[150px] h-[30px] rounded-br-xl ${item.status == 0 && "bg-[#139D4B]"} ${item.status == 1 && "bg-yellow-400"} ${item.status == 2 && "bg-red-600"} absolute top-0 left-0 text-[20px] text-white">
           ${item.status == 0 ? "Рекомендуем" : ""}
           ${item.status == 1 ? "Cкидка" : ""}
           ${item.status == 2 ? "Нет в наличии" : ""}
         </button>
      `
      list.append(elItem)
    })
}

renderProducts(productsData, elUiProducts, "0")
renderProducts(productsData, elUiProducts2, "1")

function handleOrder(id){

  let findOrdered = productsData.find(item => item.id === id)
  elModalWrapper.classList.remove("scale-0")

  elModalInnerWrapper.innerHTML = `
     <div class="flex items-center justify-evenly">
        <div class="w-[50%]">
            <img src=${findOrdered.image} name="ordered_image" alt="altImage" width="490" height="305"/>
            <strong class="text-[20px] block text-center">${findOrdered.price} сум</strong>
        </div>
        <form class="order_form w-[40%]">
            <input required type="text" placeholder="Ваше имя" name="username"    class="w-[360px] p-5 rounded-xl outline-none h-[60px] border-[3px] font-bold text-[25px] leading-[29px]"/>
            <input required type="tel" placeholder="Ваш номер" name="phoneNumber" class="w-[360px] p-5 rounded-xl outline-none h-[60px] border-[3px] font-bold text-[25px] leading-[29px] mt-2"/>
            <input required type="text" placeholder="Ваш адрес" name="address"    class="w-[360px] p-5 rounded-xl outline-none h-[60px] border-[3px] font-bold text-[25px] leading-[29px] mt-2"/>
            <button class="w-[205px] mx-auto block h-[45px] font-bold text-center text-[25px] bg-yellow-400 mt-2 rounded-xl">Заказать</button>
        </form>
     </div>
  `

  let orderedForm = document.querySelector(".order_form")

  orderedForm.addEventListener("submit", (e)=> {
      e.preventDefault()

      const oderData = {
        username: e.target.username.value,
        phoneNumber: e.target.phoneNumber.value,
        address: e.target.address.value,
        ordered_image:findOrdered.image,
        price: findOrdered.discount_price,
        orderedAt:orderedDay,
        isConfirmed:false
      }


      

    setTimeout(()=> {
      orderedList.push(oderData)
      localStorage.setItem("ordered_products", JSON.stringify(orderedList))

      elModalInnerWrapper.innerHTML = `
        <div class="flex flex-col items-center justify-center gap-5">
           <img src="./images/Vector.png" alt="Done" width="160" height="160" class="block mx-auto"/>
           <div flex gap-2 flex-col>
              <h2 class="font-bold text-[60px] text-center leading-[29px]">Спасибо!</h2>
              <p class="text-[25px] text-center mt-[20px]">Ваш заказ успешно оформлен. Мь свяжемся с вами в ближайшее время.</p>
           </div>
        </div>
      `

      setTimeout(()=> {
         elModalWrapper.classList.add("scale-0")
      },1000)
    }, 1000)
    
  })
}

elModalWrapper.addEventListener("click", (event)=> {
   if(event.target.id === "wrapper"){
    elModalWrapper.classList.add("scale-0")
   }
})