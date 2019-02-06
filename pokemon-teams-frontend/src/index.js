const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const showTrainerCards = document.querySelector('#show-teams')

const fetchTrainers = () => {
  return fetch(TRAINERS_URL)
    .then(res => res.json())
}

const renderAllTrainerCards = (trainers) => {
  trainers.forEach(renderSingleTrainerCard)
}


const renderSingleTrainerCard = (trainer) => {
  const pokeList = trainer.pokemons.map(pokemon => `<li>${pokemon.nickname} (${pokemon.species})<button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`).join(" ")

  const singleCard = document.createElement('div')
    singleCard.innerHTML = `
    <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
    <button data-trainer-id="${trainer.id}">Add Pokemon</button>
    ${pokeList}
    </div>
    `
showTrainerCards.appendChild(singleCard)
}



fetchTrainers()
  .then(renderAllTrainerCards)
