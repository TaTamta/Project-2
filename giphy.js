const giphyUrl = "https://api.giphy.com/v1/gifs/search?";
const apiKey = "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB";
const trendingsURL = "https://api.giphy.com/v1/gifs/trending?"

// const input = document.getElementById('input_word').value;
// const searchURL = `https://api.giphy.com/v1/gifs/search?q=${input}&rating=g&api_key=${apiKey}`;

let searchButton = document.getElementById('search_button');


searchButton.addEventListener('click',() => {
    request()
})

async function request(){
    const search_word = document.getElementById("input_word").value;
    let response = await fetch(`${giphyUrl}api_key=${apiKey}&q=${search_word}`);
    console.log(response);
    let gifs = await response.json()
    console.log(gifs)
    showData(gifs)
}


function showData(gifs){
    for(let i = 0; i < gifs.data.length; i++){
        document.querySelector('#results').innerHTML = `<img src="${gifs.data[i].images.fixed_height.url}">`
    }
    
}

