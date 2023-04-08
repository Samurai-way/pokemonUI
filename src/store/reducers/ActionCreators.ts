// import {AppDispatch} from "../store";
// import axios from "axios";
// import {pokemonSlice} from "./PokemonSlice";
//
// export const fetchPokemons = () => async (page: number, limit: number,dispatch: AppDispatch) => {
//     try {
//         dispatch(pokemonSlice.actions.pokemonsFetching())
//         const response = await axios.get('https://pokemon-gahe.onrender.com/api/pokemon?page=${page}&limit=${limit}')
//         dispatch(pokemonSlice.actions.pokemonsFetchingSuccess(response.data))
//     } catch (e: any) {
//         dispatch(pokemonSlice.actions.pokemonsFetchingError(e.message))
//     }
// }

import {AppDispatch} from "../store";
import {pokemonSlice} from "./PokemonSlice";
import axios from "axios";

export const fetchPokemons = async (page: number, limit: number, dispatch: AppDispatch) => {
    try {
        dispatch(pokemonSlice.actions.pokemonsFetching())
        const response = await axios.get(`https://pokemon-gahe.onrender.com/api/pokemon?page=${page}&limit=${limit}`)
        dispatch(pokemonSlice.actions.pokemonsFetchingSuccess(response.data.items))
    } catch (e: any) {
        dispatch(pokemonSlice.actions.pokemonsFetchingError(e.message))
    }
}
