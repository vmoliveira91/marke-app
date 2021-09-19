import styled from 'styled-components'
import { StateProps } from 'helpers/types/state'
import { ChangeEvent } from 'react'

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

export const TextArea = ({ state, setState }: StateProps) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setState(event.target.value)
  }

  return (
    <TextAreaStyle value={state} onChange={handleChange} />
  )
}
