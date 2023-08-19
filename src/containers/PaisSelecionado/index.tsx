import { useSelector } from 'react-redux'
import { Titulo } from '../../components/Titulo'
import { SBandeiraPais, SContainerInfo, SContainerPrincipal } from './style'

export const PaisSelecionado = () => {
  const { pais } = useSelector((rootReducer: any) => rootReducer.PaisReducer)
  console.log(pais)
  const { src, region, capital, name } = pais
  return (
    <SContainerPrincipal>
      <SBandeiraPais src={src} />
      <SContainerInfo>
        <Titulo>{name}</Titulo>
      </SContainerInfo>
    </SContainerPrincipal>
  )
}
