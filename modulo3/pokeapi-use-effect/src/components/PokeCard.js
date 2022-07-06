import axios from "axios";
import {useEffect, useState} from "react"

function PokeCard(props) {
  // Passo 4b
  // Implementa suas variáveis de estado aqui.
  const [pokemon, setPokemon] = useState({})

  // Passo 4c
  // componentDidMount() {
  //   this.pegaPokemon(this.props.pokeName);
  // };
  useEffect(() => {
    const pegaPokemon = async () => {
      try{
        const res = await axios .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
        setPokemon(res.data)
        } catch(err) {
          console.log(err);
        };
      }

      pegaPokemon()
    }, [props.pokeName]);

  // // Passo 4c
  // useEffect((prevProps) => {
  //   if (prevProps.pokeName !== props.pokeName) {
  //     pegaPokemon(props.pokeName);
  //   };
  // }, []);

  // Passo 4c

  return (
    <figure>
        <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
        <p>Peso: {pokemon.weight} Kg</p>
        <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
    </figure>
  );
};

export default PokeCard;
