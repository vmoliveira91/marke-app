import { Input } from './input'
import { TextArea } from './textarea'
import { FlexWrapper } from 'util/index'

export const EditingArea = () => {
  return (
    <FlexWrapper flexDirection='column' justifyContent='center' alignItems='center' rowGap='10'>
      <Input />
      <TextArea />
    </FlexWrapper>
  )
}
