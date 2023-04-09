import {AppDispatch} from "../store";
import {pokemonSlice} from "./PokemonSlice";
import axios from "axios";

export const fetchPokemons = async (page: number, limit: number, dispatch: AppDispatch) => {
    try {
        dispatch(pokemonSlice.actions.pokemonsFetching())
        const response = await axios.get(`https://pokemon-gahe.onrender.com/api/pokemon?pageNumber=${page}&pageSize=${limit}`)
        dispatch(pokemonSlice.actions.pokemonsFetchingSuccess(response.data.items))
    } catch (e: any) {
        dispatch(pokemonSlice.actions.pokemonsFetchingError(e.message))
    }
}

export const fetchMyPokemons = async (dispatch: AppDispatch, userId: string) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/pokemon/my/${userId}`);
        dispatch(pokemonSlice.actions.myPokemonsFetching(response.data.items))
    } catch (e: any) {
        dispatch(pokemonSlice.actions.pokemonsFetchingError(e.message))
    }
}