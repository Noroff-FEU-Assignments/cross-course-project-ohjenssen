const movieSection = document.querySelector(".movie-section");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const movieInformation = document.querySelector(".movie-information");

// Render movie
 function renderProducts(){
     movies.forEach((movie) => {
        movieSection.innerHTML += `
                    <div>
                        <a href="film-3_10_to_lillehammer.html"><img src="${movie.imgSrc}"  class="movie-images" alt="Image of the movie 3:10 To Lillehammer"></a>
                        <h3>${movie.name}</h3>
                        <button class="addToCart" onclick="addToCart(${movie.id})">Add to cart</button>
                    </div>
        `;
     })
 }
 renderProducts();

 let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

 //ADD TO CART
 function addToCart(id){
     //check if product already exist
     if(cart.some((item) => item.id === id)){
         alert("Product already in cart!")
     } else {
        const item = movies.find((movie) => movie.id === id)

        cart.push(item);

        console.log(cart);
     }

    updateCart();
 }

 //update cart
 function updateCart(){
    renderCartItems();
    rendersubTotal();

    //save cart to localstorage
    localStorage.setItem("CART", JSON.stringify(cart));
 }

 // calculate and render subtotal
 function rendersubTotal(){
     let totalPrice = 0, 
     totalItems = 0;

     cart.forEach((item) => {
         totalPrice += item.price;
         totalItems += item.numberOfUnits;
     });

     subtotalEl.innerHTML = `<p>Subtotal (${totalItems} items): $${totalPrice} </p>`;
 }

 // render cart items
 function renderCartItems(){
     cartItemsEl.innerHTML = ""; //clear element
    cart.forEach((item) =>{
        cartItemsEl.innerHTML += `                        
                                    <div class="cart-item" onclick="removeItemFromCart(${item.id})">
                                        <h3>${item.name} X </h3>
                                    </div>`;
    });
 }

 // remove item from cart
 function removeItemFromCart(id){
    cart = cart.filter((item) => item.id !== id);

    updateCart();
 }

 // Render specific movie
 function renderMovie(){
    movieInformation.innerHTML = `
                                    <img src="images/movieposters/3-10-to-lillehammer.jpg" class="movie-images" alt="Image of the movie 3:10 To Lillehammer">
                                    <div class="movie-information-text">
                                        <p>Short about the movie. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p>Director: John Doe</p>
                                        <p>Actors: Jim Doe, Jane Doe</p>
                                        <p>Year: 2021</p>
                                        <button class="addToCart" onclick="addToCart(${movies[0].id})">Add to cart</button>
                                        <a href="pay-page.html" class="cta">Checkout</a>
    `;
}
renderMovie();