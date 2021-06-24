import React,{useState,useEffect} from 'react'
import { GridItemCharacters } from './GridItemCharacters'



export const GridCharacter = () => {
    
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetchCharacters();
    }, [])
    
    const fetchCharacters = async() => {
        const url = 'https://www.breakingbadapi.com/api/characters'
        const resp = await fetch(url)
        const data = await resp.json();

        setCharacters([
            data
        ])
    }
    console.log(characters)

    return (
        <>
            {
                characters.map(info => {
                    return(
                        <GridItemCharacters
                        key={info.id}
                        info={info}
                        />
                    )
                })
            }
        </>
    )
}
