import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { RefObject } from 'react'
import { ReactComponent as AddIcon } from 'assets/images/plus-symbol.svg'
import { StateProps } from 'helpers/types/state'
import { File } from 'helpers/types/file'

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

type ButtonProps = StateProps<File[]> & {
  inputRef: RefObject<HTMLInputElement>
}

export const Button = ({ setState, inputRef }: ButtonProps) => {
  const handleAddFile = () => {
    inputRef.current?.focus()

    const newFile: File = {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    window.history.replaceState(null, '', `/file/${newFile.id}`)

    if (setState) {
      setState((previousState: File[]) => {
        return [...previousState.map((file) => {
          file.active = false
          return file
        }), newFile]
      })
    }
  }

  return (
    <ButtonStyle onClick={handleAddFile}>
      <AddIcon />
      Adicionar arquivo
    </ButtonStyle>
  )
}
