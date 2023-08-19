import styled from 'styled-components'

export const SContainerPrincipal = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 80px;
  align-items: center;
`

export const SBandeiraPais = styled.img`
  width: 100%;
  box-shadow: 2px 2px 10px solid #000;
`

export const SContainerInfo = styled.div`
  width: 100%;
`

export type TPaisSelecionado = {
  bandeira: string
  name: string
}
