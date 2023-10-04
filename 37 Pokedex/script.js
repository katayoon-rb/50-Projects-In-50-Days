const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}


const fetchPokemons = async () => {
    for (let i = 1; i <= 150; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const data = await res.json()

        createPokemonCard(data)
    }
}


const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    const id = pokemon.id.toString().padStart(3, '0')

    const type = Object.keys(colors).find(type => {
        return pokemon.types.map(type => type.type.name).indexOf(type) > -1
    })

    pokemonEl.style.backgroundColor = colors[type]


    pokemonEl.innerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span> </small>
        </div>
    `

    document.getElementById('poke-container').appendChild(pokemonEl)
}

fetchPokemons()
