import { ItemPais } from '../../components/Item-Pais'
import { useGetPaisesQuery } from '../../services/api'
import { SContainerPaises } from './style'

export const Paises = () => {
  const { data: paises } = useGetPaisesQuery()

  return (
    <SContainerPaises>
      {paises?.map((pais: any) => (
        <ItemPais
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
