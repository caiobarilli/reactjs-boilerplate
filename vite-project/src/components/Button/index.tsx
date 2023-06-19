import React from 'react'
import * as S from './styles'

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <S.Wrapper onClick={onClick}>{children}</S.Wrapper>
}

export default Button
