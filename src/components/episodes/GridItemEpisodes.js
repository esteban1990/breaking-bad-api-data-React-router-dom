import React from 'react'

export const GridItemEpisodes = ({info}) => {
    return (
        <>
            {
                info.map(episode => {
                    return(
                        <div key={episode.id}>
                            <li>{episode.title}</li>
                        </div>
                    )
                })
            }
        </>
    )
}
