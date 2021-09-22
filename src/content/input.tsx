import styled from 'styled-components'
import { ReactComponent as FileIcon } from 'assets/images/file-white-icon.svg'
import { FlexWrapper } from 'util/index'
import { RefObject } from 'react'
import { File } from 'helpers/types/file'

const FileIconStyle = styled(FileIcon)`
  margin-left: 10px;
  
  path {
    stroke: ${({ theme }) => theme.colors.primary}
  }
`

const InputStyle = styled.input`
  width: 80%;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};

  border: none;
  &:focus {
    outline: none;
  }
`

type InputProps = {
  inputRef: RefObject<HTMLInputElement>
  file: File
  handleFileName: Function
}

export const Input = ({ inputRef, file, handleFileName }: InputProps) => {
  return (
    <FlexWrapper flexDirection='row' justifyContent='flex-start' alignItems='center' columnGap='10' componentWidth='100%'>
      <FileIconStyle />
      <InputStyle ref={inputRef} value={file.name} onChange={handleFileName(file.id)} />
    </FlexWrapper>
  )
}
