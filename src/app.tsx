import styled from 'styled-components'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useFiles } from 'resources/files/use-file'

const AppStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`

const App = () => {
  const {
    inputRef,
    files,
    setFiles,
    handleSelectFile,
    handleDeleteFile,
    handleUpdateFileName,
    handleUpdateFileContent,
  } = useFiles()

  return (
    <AppStyle>
      <Sidebar
        state={files}
        setState={setFiles}
        inputRef={inputRef}
        handleSelect={handleSelectFile}
        handleDelete={handleDeleteFile}
      />
      <Content
        inputRef={inputRef}
        file={files.find(file => file.active)}
        handleFileName={handleUpdateFileName}
        handleFileContent={handleUpdateFileContent}
      />
    </AppStyle>
  )
}

export { App }
