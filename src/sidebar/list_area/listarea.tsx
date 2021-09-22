import styled from 'styled-components'
import { RefObject } from 'react'
import { Title } from './title'
import { Button } from './button'
import { List } from './list'
import { StateProps } from 'helpers/types/state'
import { File } from 'helpers/types/file'

const ListAreaStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 15px;
`

type ListAreaProps = StateProps<File[]> & {
  inputRef: RefObject<HTMLInputElement>
  handleSelect: Function
  handleDelete: Function
}

export const ListArea = ({ state, setState, inputRef, handleSelect, handleDelete }: ListAreaProps) => {
  return (
    <ListAreaStyle>
      <Title />
      <Button
        state={state}
        setState={setState}
        inputRef={inputRef}
      />
      <List
        state={state}
        setState={setState}
        handleSelect={handleSelect}
        handleDelete={handleDelete}
      />
    </ListAreaStyle>
  )
}
