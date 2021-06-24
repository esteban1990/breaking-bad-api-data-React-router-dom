import React from 'react'

export const GridItemCharacters = ({ info }) => {
    console.log(info)

    return (
        <div>
            {
                info.map(info => {
                    return (
                        <div key={info.char_id}>
                            <li>{info.name} - {info.nickname} - {info.birthday}</li>
                            <img src={info.img} />

                        </div>
                    )
                })
            }
        </div>
    )
}
