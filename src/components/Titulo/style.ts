import styled from 'styled-components'

export const STitulo = styled.h1<TTitulo>`
  font-size: ${(props) =>
    props.tamanhoDaFonte ? props.tamanhoDaFonte + 'px' : '40px'};
`
export type TTitulo = {
  tamanhoDaFonte?: number
  children: string
}
