let userName = document.querySelector(".username")
const user = JSON.parse(localStorage.getItem("user"))
userName.innerHTML = user.username

let elTbodyProducts = document.querySelector(".orderedProducts_wrapper")

let orderedProductsList = JSON.parse(localStorage.getItem("ordered_products"))

function renderOrderedProducts(arr,list){
    list.innerHTML = null
 
   
    arr.forEach(item => {
       let elTr = document.createElement("tr")
       elTr.innerHTML = `
                <td class="flex flex-col">
                   <strong class="text-[18px] text-black leading-[13px] m-5">${item.username}</strong>
                </td>
                <td class="py-[7px] text-[18px]">${item.phoneNumber}</td>
                  <td class="py-[7px]"><img class="mx-auto" src=${item.ordered_image} alt="Pool" width="100" height="30"></td>
                  <td class="py-[7px] text-[18px]">${item.price}</td>
                  <td class="py-[7px] text-[18px]">${item.address}</td>
                  <td class="py-[7px] text-[18px]">${item.orderedAt}</td>
                  <td class="py-[7px]">
                   <div class="flex items-center gap-[18px]">
                         <button onclick="handlecheckBtn(${item.id})"><i class="fa-solid fa-circle-check text-xl ${item.isConfirmed === true ? "text-green-600" : ""}"></i></button>
                         <button onclick="handleDelete(${item.id})"><img src="./images/delete.svg" alt="delete img"  width="30" height="30"></button>
                   </div>
             </td>
       `
 
       list.append(elTr)
    })
 }
 
 renderOrderedProducts(orderedProductsList, elTbodyProducts)
 // Render OrderedProducts end

//  HandleDelete function Button start
 function handleDelete(id){
    let deleteOrder = orderedProductsList.findIndex(item => item.id === id)
    orderedProductsList.splice(deleteOrder, 1)
    localStorage.setItem("ordered_products", JSON.stringify(orderedProductsList))
    renderOrderedProducts(orderedProductsList, elTbodyProducts)
 }
//  HandleDelete function Button end


// HandleCheck function Button start
 function handlecheckBtn(id){
    const findCheck = orderedProductsList.find(item => item.id === id)
    findCheck.isConfirmed = !findCheck.isConfirmed

    console.log(findCheck)
    localStorage.setItem("ordered_products", JSON.stringify(orderedProductsList))
    renderOrderedProducts(orderedProductsList, elTbodyProducts) 
 }

// HandleCheck function Button end