const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const container = document.querySelector(".container");

const baseurl = "https://squareeyes.oskarjenssen.com/wp-json/wc/store/products";

const main = document.querySelector("main");
const docTitle = document.querySelector("title");

const getMovie = async (url) => {
    try {
        const response = await fetch(url);
        const films = await response.json();

        console.log(films[id]);

        docTitle.innerHTML = `Details: ${films[id].name}`;
        container.innerHTML = ` <div class="headline">
                                    <h1>${films[id].name}</h1>
                                    <div>
                                        <p>Shopping cart:</p>
                                        <p class="cart-items"></p>
                                        <div class="subtotal"></div>
                                    </div>
                                </div>
                                <div class="movie-information">
                                    <img src="${films[id].images[0].src}" class="movie-images" alt="Image of the movie ${films[id].name}">
                                    <div class="movie-information-text">
                                        <p>${films[id].description}</p>
                                        <p>Director: John Doe</p>
                                        <p>Actors: Jim Doe, Jane Doe</p>
                                        <p>Year: 2021</p>
                                        <button class="addToCart">Add to cart</button>
                                    </div>
                                </div>`;


    }
    catch {

    }
}

getMovie(baseurl);