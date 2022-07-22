import * as S from './styles'

type HeadingProps = {
  children: React.ReactNode
}

function Heading({ children }: HeadingProps) {
  return <S.Title> {children} </S.Title>
}

export default Heading
