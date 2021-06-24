import React from 'react'

export const GridItemQuotes = ({info}) => {
    // console.log(info)
    return (
        <>
            {
                info.map(info => {
                    return(
                        <div key={info.id}>
                            <li>{info.quote} - {info.author} - {info.series}</li>

                        </div>
                    )
                })
            }
        </>
    )
}
