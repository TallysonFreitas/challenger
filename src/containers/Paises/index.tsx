import { useEffect, useState } from 'react'
import { ItemPais } from '../../components/Item-Pais'
import { SContainerPaises } from './style'

export const Paises = () => {
  const [api, setApi] = useState([])

  useEffect(() => {
    fetch('./data.json').then((resposta) => {
      resposta.json().then((json) => {
        setApi(json)
      })
    })
  }, [])

  console.log(api)

  return (
    <SContainerPaises>
      {api.map((pais: any) => (
        <ItemPais
          name={pais.name}
          key={pais.name}
          src={pais.flag}
          population={pais.population}
          region={pais.region}
          capital={pais.capital}
        />
      ))}
    </SContainerPaises>
  )
}
