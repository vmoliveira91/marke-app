import styled from 'styled-components'
import { File } from 'helpers/types/file'
import { FlexWrapper, SavingIcon, SavedIcon } from 'util/index'
import { ReactComponent as FileIcon } from 'assets/images/file-white-icon.svg'
import { ReactComponent as DeleteIcon } from 'assets/images/delete-icon.svg'
import { ReactComponent as EditingIcon } from 'assets/images/editing-icon.svg'

type ListItemStyleProps = {
  active: boolean
}

const ListItemStyle = styled.li<ListItemStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 33.88px;
  padding: 0 10px;
  border: none;
  border-radius: 3.39px;

  background-color: ${props => props.active ? ({ theme }) => theme.colors.lightBlack : 'none'};

  & a {
    color:  ${props => props.active ? ({ theme }) => theme.colors.white : 'rgba(255, 255, 255, 0.65)'};
    text-decoration: none;
  }

  & button {
    display: none;
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }

  & div svg path {
    stroke: ${props => props.active ? ({ theme }) => theme.colors.primary : 'rgba(255, 255, 255, 0.65)'};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlack};

    a {
      color: ${({ theme }) => theme.colors.white};
    }

    button {
      display: ${props => props.active ? 'none' : 'inline-block'};
    }

    div svg path {
      stroke: ${props => !props.active ? ({ theme }) => theme.colors.white : ''};
    }
  }
`

type ListItemProps = {
    file: File
    handleDelete: Function
}

export const ListItem = ({ file, handleDelete }: ListItemProps) => {
  return (
    <ListItemStyle active={file.active}>
      <FlexWrapper flexDirection='row' justifyContent='flex-start' alignItems='center' columnGap='10'>
        <FileIcon />
        <a href='/'>{file.name}</a>
      </FlexWrapper>
      {(file.active && file.status === 'editing') && <EditingIcon />}
      {(file.active && file.status === 'saved') && <SavedIcon />}
      {(file.active && file.status === 'saving') && <SavingIcon />}
      {!file.active && <button onClick={() => handleDelete(file.id)}><DeleteIcon /></button>}
    </ListItemStyle>
  )
}
