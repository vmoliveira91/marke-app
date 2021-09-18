import styled from 'styled-components'
import { ReactNode } from 'react'

type FlexWrapperProps = {
  children: ReactNode | ReactNode[]
  flexDirection: 'row' | 'column'
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems: 'flex-start' | 'flex-end' | 'center'
  rowGap?: string
  columnGap?: string
  componentWidth?: string
  componentPadding?: string
}

const FlexWrapperStyle = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    row-gap: ${props => props.rowGap}px;
    column-gap: ${props => props.columnGap}px;
    width: ${props => props.componentWidth};
    padding: ${props => props.componentPadding};
`
export const FlexWrapper = ({ children, flexDirection, justifyContent, alignItems, rowGap, columnGap, componentWidth, componentPadding }: FlexWrapperProps) => {
  return (
    <FlexWrapperStyle
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      rowGap={rowGap}
      columnGap={columnGap}
      componentWidth={componentWidth}
      componentPadding={componentPadding}
    >
      {children}
    </FlexWrapperStyle>
  )
}
