import React,{useState,useEffect} from 'react'
import { GridItemEpisodes } from './GridItemEpisodes';

export const GridEpisodes = () => {

    const [episodes,setEpisodes] = useState([])

    useEffect(() => {
        fetchEpisodes();
    }, [])

    const fetchEpisodes = async() => {
        const url = 'https://www.breakingbadapi.com/api/episodes'
        const resp = await fetch(url)
        const data = await resp.json();

        setEpisodes([
            data
        ])
    }
    console.log(episodes)
    return (
        <>
            {
                episodes.map(info => {
                    return(
                        <GridItemEpisodes
                        key={info.id}
                        info={info}
                        />
                    )
                })
            }
        </>
    )
}
