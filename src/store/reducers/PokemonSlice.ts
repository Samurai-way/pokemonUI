import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPokemons} from "../../models/IPokemons";


interface PokemonstState {
    pokemons: IPokemons[]
    myPokemons: IPokemons[]
    isLoading: boolean
    error: string
    userId: string
}

const initialState: PokemonstState = {
    pokemons: [],
    myPokemons: [],
    isLoading: false,
    error: '',
    userId: ''
}
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        myPokemonsFetching(state, action: PayloadAction<IPokemons[]>) {
            state.isLoading = false
            state.error = ''
            state.myPokemons = action.payload
        },
        pokemonsFetching(state) {
            state.isLoading = true
        },
        pokemonsFetchingSuccess(state, action: PayloadAction<IPokemons[]>) {
            state.isLoading = false
            state.error = ''
            state.pokemons = action.payload
        },
        pokemonsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        updateUserId(state, action: PayloadAction<string>) {
            state.userId = action.payload
        }
    }
})

export default pokemonSlice.reducer