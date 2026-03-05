import React, {createContext, useContext} from 'react'
import useFavorites from '../hook/useFavorites'
import { Children } from 'react'
const FavoritesContext = createContext(null)
 
export const FavoritesProvider = ({Children}) =>{
    const value = useFavorites()

    return(
        <FavoritesContext.Provider value={value}>
            {Children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext =()=>{
    const ctx = useContext(FavoritesContext)

    if(!ctx){
        throw new Error('seFavoritesContext Error')
    }
    return ctx
}