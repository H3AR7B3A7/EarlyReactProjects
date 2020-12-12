import { useEffect, useState } from 'react'

const url = 'https://pokeapi.co/api/v2/pokemon?limit=1200'

function App() {
  const [loading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    const response = await fetch(url)
    const newPokemon = await response.json()
    setPokemons(newPokemon.results)
    setLoading(false)
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    )
  }


  return (
    <section>
      <h1>Pokemon</h1>
      {console.log(pokemons)}
      {pokemons.map((pokemon, index) => {
        return (
          <article className='pokemon'>
            <h4>{index + 1}, {pokemon.name}</h4>
            {/* <p>{pokemon.url}</p> */}
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png"} alt="" />
          </article>
        )
      })}
    </section>
  );
}

export default App;
