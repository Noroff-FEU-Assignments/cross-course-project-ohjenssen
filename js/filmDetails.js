const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const container = document.querySelector(".container");

const baseurl = "https://squareeyes.oskarjenssen.com/wp-json/wc/store/products/" + id;

const main = document.querySelector("main");
const docTitle = document.querySelector("title");

const getMovie = async (url) => {
    try {
        const response = await fetch(url);
        const films = await response.json();

        console.log(baseurl);

        docTitle.innerHTML = `Details: ${films.name}`;
        container.innerHTML = ` <div class="headline">
                                    <h1>${films.name}</h1>
                                    <div>
                                        <p>Shopping cart:</p>
                                        <p class="cart-items"></p>
                                        <div class="subtotal"></div>
                                    </div>
                                </div>
                                <div class="movie-information">
                                    <img src="${films.images[0].src}" class="movie-images" alt="Image of the movie ${films.name}">
                                    <div class="movie-information-text">
                                        <p>${films.description}</p>
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