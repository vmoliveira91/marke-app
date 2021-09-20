import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
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

export const Button = ({ setState }: StateProps<File[]>) => {
  const handleAddFile = () => {
    const newFile: File = {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

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
