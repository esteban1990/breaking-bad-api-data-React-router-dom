import React,{useState,useEffect} from 'react'
import { GridItemQuotes } from './GridItemQuotes'

export const GridQuote = () => {

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetchQuotes();
    }, [])

    const fetchQuotes = async() => {
        const url = 'https://www.breakingbadapi.com/api/quotes'
        const resp = await fetch(url)
        const data = await resp.json();

        setQuotes([
            data
        ])
    }


    
    return (
        <>
           {
               quotes.map(info => {
                   return(
                       <GridItemQuotes
                       key={info.id}
                       info={info}
                       />
                   )
               })
           } 
        </>
    )
}
