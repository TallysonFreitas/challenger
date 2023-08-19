import { STexto, TTexto } from './style'

export const Texto = ({ children, strong }: TTexto) => {
  return (
    <STexto>
      {strong && <strong>{strong}</strong>}
      {children}
    </STexto>
  )
}
