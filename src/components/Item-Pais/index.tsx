import { secondPage } from '../../redux/pagina/action'
import { Texto } from '../Texto'
import { Titulo } from '../Titulo'
import {
  SContainerImagem,
  SContainerTexto,
  SImagemDoPais,
  SItemPais,
} from './style'
import { useDispatch } from 'react-redux'

type TItemPais = {
  src: string
  population: number
  region: string
  capital: string
}

export const ItemPais = ({ src, population, region, capital }: TItemPais) => {
  const dispatch = useDispatch()

  const onMapClick = () => {
    dispatch(secondPage())
  }

  return (
    <SItemPais onClick={onMapClick}>
      <SContainerImagem>
        <SImagemDoPais src={src} />
      </SContainerImagem>
      <SContainerTexto>
        <Titulo tamanhoDaFonte={28}>Nome do pais</Titulo>
        <Texto>Population: {population as unknown as string}</Texto>
        <Texto>Region: {region}</Texto>
        <Texto>Capital: {capital}</Texto>
      </SContainerTexto>
    </SItemPais>
  )
}
