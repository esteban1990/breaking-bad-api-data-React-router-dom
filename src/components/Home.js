import React,{useState} from 'react'

export const Home = () => {

    const [inputValue,setInputValue] = useState('')
    const [state,setState] = useState([]) 

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit =  async(e) => {
        e.preventDefault();
        const categoryValue = document.querySelector('#category').value
        const nameValue = document.querySelector('#name').value 
        const url = `https://www.breakingbadapi.com/api/${categoryValue},${nameValue}`
        const resp = await fetch(url)
        const data = await resp.json();
        
        setState([
            data
        ])

    }
    // console.log(state)

    return (
        <div>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <input
                  type="text"
                  value={inputValue}
                  id='category'
                  onChange={handleChange}
                  placeholder="Ingresa una Categoria"
                  />
              </div>
              <div className="form-group">
                  <input
                  type="text"
                  id='name'
                  placeholder="ingresa un nombre"
                  />
              </div>
              <button type="submit" className="btn btn-success">Buscar</button>
          </form>
        </div>
    )
}
