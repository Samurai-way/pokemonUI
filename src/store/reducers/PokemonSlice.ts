import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPokemons} from "../../models/IPokemons";


interface PokemonstState {
    pokemons: IPokemons[]
    isLoading: boolean
    error: string
}

const initialState: PokemonstState = {
    pokemons: [],
    isLoading: false,
    error: '',
}
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        pokemonsFetching(state) {
            state.isLoading = true
        },
        pokemonsFetchingSuccess(state, action: PayloadAction<IPokemons[]>) {
            // debugger
            state.isLoading = false
            state.error = ''
            state.pokemons = action.payload
        },
        pokemonsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default pokemonSlice.reducer