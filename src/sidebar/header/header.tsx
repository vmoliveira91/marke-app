import styled from 'styled-components'
import logo from 'assets/images/logo.svg'

const HeaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = () => {
  return (
    <HeaderStyle>
      <img src={logo} alt='Logo' />
    </HeaderStyle>
  )
}
