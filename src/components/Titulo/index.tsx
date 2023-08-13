import { STitulo, TTitulo } from './style'

export const Titulo = ({ children, tamanhoDaFonte = 40 }: TTitulo) => {
  return <STitulo tamanhoDaFonte={tamanhoDaFonte}>{children}</STitulo>
}
