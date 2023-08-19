import { PaisSelecionado } from '../../redux/PaisSelecionado/action'
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
  name: string
}

export const ItemPais = ({
  src,
  population,
  region,
  capital,
  name,
}: TItemPais) => {
  const dispatch = useDispatch()

  const onMapClick = () => {
    dispatch(secondPage())
  }

  const saveCountry = () => {
    dispatch(PaisSelecionado([src, region, capital, name]))
  }

  return (
    <SItemPais onClick={saveCountry} onMouseUp={onMapClick}>
      <SContainerImagem>
        <SImagemDoPais src={src} />
      </SContainerImagem>
      <SContainerTexto>
        <Titulo tamanhoDaFonte={28}>{name}</Titulo>
        <Texto strong={'Population:'}> {population as unknown as string}</Texto>
        <Texto strong={'Region:'}> {region ? region : 'none'}</Texto>
        <Texto strong={'Capital:'}> {capital ? capital : 'none'}</Texto>
      </SContainerTexto>
    </SItemPais>
  )
}
