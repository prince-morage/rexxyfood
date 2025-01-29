let listProductHtml = document.querySelector('.listproduct');
let listCartHtml = document.querySelector('.listcart');



const  addCartToHtml = () => {
    listCartHtml.innerHTML = '';
    let totalQuantity = 0;
    if(carts.length > 0){
     carts.forEach(cart => {
         totalQuantity = totalQuantity + cart.quantity;
         let newCart = document.createElement('div');
         newCart.classList.add('item');
         newCart.dataset.id = cart.product_id;
         let positionproduct = listproducts.findIndex((value) => value.id == cart.product_id)
        let info = listproducts[positionproduct]
        
         newCart.innerHTML = `
           <div class="image">
             <img src="${info.image}" alt="">
          </div>
          <div class="name">
          ${info.name}
          </div>
          <div class="totalprice">
         $ ${ current = info.price * cart.quantity }
          </div>

          <div class="quantity">
             <span>${cart.quantity}</span>

          </div>
         `

         listCartHtml.appendChild(newCart)
     })
    }
    iconCartSpan.textContent = totalQuantity;
 }


// const addDataToHtml = () => {
//     // listProductHtml.innerHTML = '';
//     if(listproducts.length > 0){
//         listproducts.forEach(product => {
//             let newProduct = document.createElement('div');
//             newProduct.classList.add('item');
//             newProduct.dataset.id = product.id
//             newProduct.innerHTML = `
//              <img src="${product.image}" alt="">
//               <div class="product-name">
//                  <h2>${product.name}</h2>
//                 </div>
//                 <div class="price">$${product.price}</div>
//                 <button class="addcart">
//                     ADD TO CART
//                 </button>
//                 `;
//             // listProductHtml.appendChild(newProduct);
//         })
//     }
// }


 
 function checkout() {
//  get data from jsoon
fetch('product.json')
.then(response => response.json())
.then(data => {
    listproducts = data;
    // addDataToHtml()


    if(localStorage.getItem('cart')){
        carts = JSON.parse(localStorage.getItem('cart'));
        addCartToHtml();
        // addDataToHtml();
    }
})
}
checkout(); 