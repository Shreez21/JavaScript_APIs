console.log("Hello World!\n==========\n");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "1QhgR8EoKiIzjwLtGRBWRDy5f3Qyxx0Z";




let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");

searchBtn.addEventListener("click", (event) =>{
getGif(searchInput.value);
});

function getGif(searchTerm) {
    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    .then((res) => res.json())
    .then((body) => {
        gifEle.src = body.data.images.original.url;
    })
    .catch((err) => { console.error(err);

    feedbackEle.textContent = err.message;
    });   
}

