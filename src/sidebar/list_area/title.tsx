import styled from 'styled-components'

const TitleStyle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  
  & span {
    background-color: ${({ theme }) => theme.colors.primary};
    height: 2px;
  }

  & span:first-child {
    width: 14px;
    margin-right: 6px;
  }

  & span:last-child {
      width: 178px;
      margin-left: 6px;
  }
`

export const Title = () => {
  return (
    <TitleStyle>
      <span />
      Arquivos
      <span />
    </TitleStyle>
  )
}
