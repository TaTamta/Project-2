const giphyUrl = "https://api.giphy.com/v1/gifs/search?";
const apiKey = "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB";
const trendingsURL = "https://api.giphy.com/v1/gifs/trending?"

// const input = document.getElementById('input_word').value;
// const searchURL = `https://api.giphy.com/v1/gifs/search?q=${input}&rating=g&api_key=${apiKey}`;

let searchButton = document.getElementById('search_button');
let randomsButton = document.getElementById('trendings_button');
const suggestions = ['internet Cats', "meme's", 'Typing', 'Space', 'Rick and Morty' ];

function renderSuggestions(){
    for (let i = 0; i < suggestions.length; i++){
        document.getElementById('suggestions').innerHTML += "<button class='suggestion'>" + suggestions[i] + "</button>"
    }
};
renderSuggestions();


searchButton.addEventListener('click',() => {
    searchRequest()  
    console.log(suggestions)
})

randomsButton.addEventListener('click', () => {
    trendingsRequest()
})




function addSuggestion(){
    const search_word = document.getElementById("input_word").value;
    suggestions.push(search_word);
}


async function trendingsRequest(){
    let trendsResponse = await fetch(`${trendingsURL}api_key=${apiKey}`);
    console.log(trendsResponse);
    let trends = await trendsResponse.json()
    console.log(trends)
    showData(trends)
}

function showData(trends){
    for(let i = 0; i < trends.data.length; i++){
        let newImg = `<img src="${trends.data[i].images.fixed_height.url}">`;
        document.querySelector('#results').innerHTML = newImg;
        
    }
}


async function searchRequest(){
    const search_word = document.getElementById("input_word").value;
    let response = await fetch(`${giphyUrl}api_key=${apiKey}&q=${search_word}`);
    console.log(response);
    let gifs = await response.json()
    console.log(gifs)
    showData(gifs)
}


function showData(gifs){
    for(let i = 0; i < gifs.data.length; i++){
        let newImg = `<img src="${gifs.data[i].images.fixed_height.url}">`;
        document.querySelector('#results').innerHTML = newImg;
    }
}

