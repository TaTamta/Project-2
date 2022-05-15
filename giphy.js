const api_key = "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB";
const input_word = document.getElementById('#input_word');
let apiURL = `https://api.giphy.com/v1/gifs/search?q=${input_word}&rating=g&api_key=${api_key}&limit=25`;

function request() {
    fetch(apiURL).then(function(res){
        return res.json()
    })
    .then(function(json){
        let imgUrl=json.data[0].images.fixed_height.url;
        let img = document.createElement("img");
        document.getElementById('results').innerHTML = '<img></img>'
        img.setAttribute('src', imgUrl)
        document.body.appendChild(img)
    })
}


