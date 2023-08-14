import { secondPage } from '../../redux/pagina/action'
import { Texto } from '../Texto'
import { Titulo } from '../Titulo'
import { SContainerImagem, SImagemDoPais, SItemPais } from './style'
import { useDispatch } from 'react-redux'

export const ItemPais = () => {
  const dispatch = useDispatch()

  const onMapClick = () => {
    dispatch(secondPage())
  }

  return (
    <SItemPais onClick={onMapClick}>
      <SContainerImagem>
        <SImagemDoPais />
      </SContainerImagem>
      <Titulo tamanhoDaFonte={28}>Nome do pais</Titulo>
      <Texto>Population: numero</Texto>
      <Texto>Region: nome</Texto>
      <Texto>Capital: nome</Texto>
    </SItemPais>
  )
}
