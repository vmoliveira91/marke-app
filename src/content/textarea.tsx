import styled from 'styled-components'
import { File } from 'helpers/types/file'

const TextAreaStyle = styled.textarea`
  width: 100%;
  height: 95vh;
  resize: none;

  border: none;
  padding: 10px;

  font-weight: 500;
  font-size: 18px;
  color: rgba(30, 41, 59, 0.86);

  &:focus {
    outline: none;
  }
`

type TextAreaProps = {
  file: File
  handleFileContent: Function
}

export const TextArea = ({ file, handleFileContent }: TextAreaProps) => {
  return (
    <TextAreaStyle value={file.content} onChange={handleFileContent(file.id)} />
  )
}
