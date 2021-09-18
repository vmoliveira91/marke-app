import styled from 'styled-components'
import { ReactComponent as AddIcon } from 'assets/images/plus-symbol.svg'

const ButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;

  width: 85%;
  height: 33.88px;
  border: none;
  border-radius: 3.39px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  font-weight: 400;
  font-size: 13.55px;

  cursor: pointer;
`

export const Button = () => {
  return (
    <ButtonStyle>
      <AddIcon />
      Adicionar arquivo
    </ButtonStyle>
  )
}
