import styled, { css } from 'styled-components'

const TitleStyle = styled.h1`${({ theme }) => css`
  color: ${theme.colors.black}
`}`

const App = () => {
  return (
    <TitleStyle>Teste</TitleStyle>
  )
}

export { App }
