import { Input } from './input'
import { TextArea } from './textarea'
import { FlexWrapper } from 'util/index'
import { StateProps } from 'helpers/types/state'
import { RefObject } from 'react'

type EditingAreaProps = StateProps<string> & {
  inputRef: RefObject<HTMLInputElement>
}

export const EditingArea = ({ state, setState, inputRef }: EditingAreaProps) => {
  return (
    <FlexWrapper flexDirection='column' justifyContent='center' alignItems='center' rowGap='10'>
      <Input inputRef={inputRef} />
      <TextArea state={state} setState={setState} />
    </FlexWrapper>
  )
}
