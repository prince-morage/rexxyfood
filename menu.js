let iconCart = document.querySelector('.icon-cart');
let close = document.querySelector(".close");
let body = document.querySelector('body');
let listProductHtml = document.querySelector('.listproduct');
let listCartHtml = document.querySelector('.listcart');
let iconCartSpan = document.querySelector('.icon-cart span')


let listproducts = [];
let carts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
close.addEventListener('click', () => {
    body.classList.toggle('showCart')
})


const addDataToHtml = () => {
    listProductHtml.innerHTML = '';
    if(listproducts.length > 0){
        listproducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id
            newProduct.innerHTML = `
             <img src="${product.image}" alt="">
              <div class="product-name">
                 <h2>${product.name}</h2>
                </div>
                <div class="price">$${product.price}</div>
                <button class="addcart">
                    ADD TO CART
                </button>
                `;
            listProductHtml.appendChild(newProduct);
        })
    }
}


listProductHtml.addEventListener('click', (event) => {
    let  positionClick = event.target;
    if(positionClick.classList.contains('addcart')){
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id)
    }
    })


    const addToCart = (product_id) => {
        let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
       if(carts.length <= 0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
       }
       else if(positionThisProductInCart < 0){
         carts.push({
            product_id: product_id,
            quantity: 1
         })
       }
       else{
        carts[positionThisProductInCart]. quantity =  carts[positionThisProductInCart].quantity + 1;
       }
    
     addCartToHtml();
    }

    const  addCartToHtml = () => {
       listCartHtml.innerHTML = '';
       let totalQuantity = 0;
       if(carts.length > 0){
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
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
                <span class="minus"><</span>
                <span>${cart.quantity}</span>
                <span class="plus">></span>

             </div>
            `

            listCartHtml.appendChild(newCart)
        })
       }
       iconCartSpan.textContent = totalQuantity;
    }


const initApp = () => {
//  get data from jsoon
fetch('product.json')
.then(response => response.json())
.then(data => {
    listproducts = data;
    addDataToHtml()
})
}
initApp();