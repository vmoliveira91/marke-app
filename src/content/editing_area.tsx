import { Input } from './input'
import { TextArea } from './textarea'
import { FlexWrapper } from 'util/index'
import { RefObject } from 'react'
import { File } from 'helpers/types/file'

type EditingAreaProps = {
  inputRef: RefObject<HTMLInputElement>
  file: File
  handleFileName: Function
  handleFileContent: Function
}

export const EditingArea = ({ inputRef, file, handleFileName, handleFileContent }: EditingAreaProps) => {
  return (
    <FlexWrapper flexDirection='column' justifyContent='center' alignItems='center' rowGap='10'>
      <Input
        inputRef={inputRef}
        file={file}
        handleFileName={handleFileName}
      />
      <TextArea
        file={file}
        handleFileContent={handleFileContent}
      />
    </FlexWrapper>
  )
}
