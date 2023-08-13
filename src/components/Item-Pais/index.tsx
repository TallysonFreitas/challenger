import { Texto } from '../Texto'
import { Titulo } from '../Titulo'
import { SContainerImagem, SImagemDoPais, SItemPais } from './style'

export const ItemPais = () => {
  return (
    <SItemPais>
      <SContainerImagem>
        <SImagemDoPais />
      </SContainerImagem>
      <Titulo>Nome do pais</Titulo>
      <Texto>Population: numero</Texto>
      <Texto>Region: nome</Texto>
      <Texto>Capital: nome</Texto>
    </SItemPais>
  )
}
