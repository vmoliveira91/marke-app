import styled from 'styled-components'
import { ReactNode } from 'react'

type WrapperProps = {
  children: ReactNode | ReactNode[]
  flexDirection: 'row' | 'column'
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems: 'flex-start' | 'flex-end' | 'center'
  rowGap?: string
  columnGap?: string
}

const WrapperStyle = styled.div<WrapperProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    row-gap: ${props => props.rowGap}px;
    column-gap: ${props => props.columnGap}px;
`
export const Wrapper = ({ children, flexDirection, justifyContent, alignItems, rowGap, columnGap }: WrapperProps) => {
  return (
    <WrapperStyle flexDirection={flexDirection} justifyContent={justifyContent} alignItems={alignItems} rowGap={rowGap} columnGap={columnGap}>
      {children}
    </WrapperStyle>
  )
}
