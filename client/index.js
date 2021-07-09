

const cryptoBtn = document.querySelector('#cryptoBtn');
const cryptoText = document.querySelector('#cryptoText');
const cryptoForm = document.querySelector('#cryptoPrice');
const cryptoDiv = document.querySelector('#cryptoDiv');
const cryptoH1 = document.querySelector('#cryptoH1');
const pokeBtn = document.querySelector('#pokeBtn');
const chuck = document.querySelector('#chuck');
const fortuneText = document.querySelector('#fortuneText');
const fortuneForm = document.querySelector('#fortuneForm');

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  document.getElementById("fortuneButton").onclick = function () {
    axios.get('http://localhost:4000/api/fortune')
    .then(function (response){
      const data = response.data;
      alert(data);
    })
  }
  function randPoke (){
    let id = Math.floor((Math.random()) * 800) + 1;
    console.log(id);
    return id;
  }
  const randomPokeGen = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randPoke()}`).then((res) => {
      let image = res.data.sprites.front_default;   
      const pokeDiv = document.querySelector('#pokeDiv');
      let newImg = document.createElement('img');
      let newP = document.createElement('p');
      delete newImg;
      newImg.src = image;
      pokeDiv.appendChild(newImg);
      pokeDiv.appendChild(newP).textContent = res.data.name;
    })
  }
  const getCryptoPrice = (e) => {
    e.preventDefault();
    axios.get(`https://api.cryptonator.com/api/ticker/${cryptoText.value.toLowerCase()}-usd`).then((res) =>{
      cryptoH1.textContent = `$${res.data.ticker.price}`;
      cryptoText.value = "";
    })
  }
  
  const chuckJoke = () => {
      axios.get('https://api.chucknorris.io/jokes/random').then((res) => {
          alert(res.data.value);
      })
  }
  const newFortune = (e) => {
    e.preventDefault()
    const data = {
        fortunes: fortuneText.value
    }
    axios.post('http://localhost:4000/api/fortune', data).then((res) => {
        const bodyObj = {
            forutunes: fortuneText.value
        }
    })
  }

  fortuneForm.addEventListener('submit', newFortune);
  cryptoForm.addEventListener('submit', getCryptoPrice);
  pokeBtn.addEventListener('click', randomPokeGen);
  chuck.addEventListener('click', chuckJoke);