import { PaisSelecionado } from './containers/PaisSelecionado'
import { Paises } from './containers/Paises'
import { EstiloGlobal } from './style'
import { useSelector } from 'react-redux'

function App() {
  const { currentPage } = useSelector(
    (rootReducer: any) => rootReducer.paginaReducer,
  )
  console.log(currentPage)

  return (
    <>
      <EstiloGlobal />
      {currentPage === 'inicial' && <Paises />}
      {currentPage === 'secundaria' && <PaisSelecionado />}
    </>
  )
}

export default App
