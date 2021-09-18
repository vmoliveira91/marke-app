import styled from 'styled-components'

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

export const TextArea = () => {
  return (
    <TextAreaStyle />
  )
}
