const giphyUrl = "https://api.giphy.com/v1/gifs/search?";
const apiKey = "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB";
const trendingsURL = "https://api.giphy.com/v1/gifs/trending?"


let searchButton = document.getElementById('search_button');
let randomsButton = document.getElementById('trendings_button');
const suggestions = ['internet Cats', "meme's", 'Typing', 'Space', 'Rick and Morty'];
let suggButton = document.getElementById("suggestions");
const outPut = document.getElementById('results');


suggButton.addEventListener('click', () => {
    suggRequest();
})

searchButton.addEventListener('click', () => {
    searchRequest()
    console.log(suggestions)
    modifySuggestions()
})


randomsButton.addEventListener('click', () => {
    trendingsRequest()
})



function modifySuggestions(){
    const search_word = document.getElementById("input_word").value;
    if(suggestions.length < 6 ){
        suggestions.push(search_word);
    }else {
        suggestions.shift();
        suggestions.push(search_word);
    }
}

function showData(gifBase) {
    outPut.innerHTML = '';
    for (let i = 0; i < gifBase.data.length; i++) {
        let fig = document.createElement('figure');
        let img = document.createElement('img');
        img.src = gifBase.data[i].images.fixed_height.url;
        img.alt = gifBase.data[i].title;
        fig.appendChild(img);
        let out = document.querySelector('.results');
        out.insertAdjacentElement('afterbegin', fig);
    }
}


function renderSuggestions() {
    for (let val in suggestions) {
        document.getElementById('suggestions').innerHTML += "<button id='suggestion'>" + suggestions[val] + "</button>"
    }
}
renderSuggestions();







//search suggestions
async function suggRequest() {
    for (let val in suggestions) {
        keyWord = suggestions[val];
        // console.log(keyWord)
        let suggResponse = await fetch(`${giphyUrl}api_key=${apiKey}&q=${keyWord}`);
        let suggGif = await suggResponse.json()
        showData(suggGif);
        // console.log(keyWord)
        // console.log(suggResponse)
    }
}





//search trends

async function trendingsRequest() {
    let trendsResponse = await fetch(`${trendingsURL}api_key=${apiKey}`);
    console.log(trendsResponse);
    let trends = await trendsResponse.json()
    console.log(trends)
    showData(trends)
}


//Search by input

async function searchRequest() {
    const search_word = document.getElementById("input_word").value;
    let response = await fetch(`${giphyUrl}api_key=${apiKey}&q=${search_word}`);
    console.log(response);
    let gifs = await response.json()
    console.log(gifs)
    showData(gifs)
}


