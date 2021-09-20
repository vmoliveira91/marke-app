import { Input } from './input'
import { TextArea } from './textarea'
import { FlexWrapper } from 'util/index'
import { StateProps } from 'helpers/types/state'

export const EditingArea = ({ state, setState }: StateProps<string>) => {
  return (
    <FlexWrapper flexDirection='column' justifyContent='center' alignItems='center' rowGap='10'>
      <Input />
      <TextArea state={state} setState={setState} />
    </FlexWrapper>
  )
}
