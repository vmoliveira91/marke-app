import styled from 'styled-components'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { File } from 'helpers/types/file'
import { setTimeout } from 'timers'

const AppStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    const updateFileStatus = () => {
      const file = files.find(file => file.active)

      if (!file || file.status !== 'editing') {
        return
      }

      timeoutId = setTimeout(() => {
        setFiles((previousFiles) => {
          return previousFiles.map(file => {
            if (file.active) {
              file.status = 'saving'
            }
            return file
          })
        })

        setTimeout(() => {
          setFiles((previousFiles) => {
            return previousFiles.map(file => {
              if (file.active) {
                file.status = 'saved'
              }
              return file
            })
          })
        }, 300)
      }, 300)
    }

    updateFileStatus()

    return () => clearTimeout(timeoutId)
  }, [files])

  const handleSelectFile = (id: string) => {
    inputRef.current?.focus()

    setFiles((previousFiles) => {
      return previousFiles.map((file) => {
        if (file.id === id) {
          file.active = true
        } else {
          file.active = false
        }
        return file
      })
    })
  }

  const handleDeleteFile = (id: string) => {
    setFiles((previousFiles) => {
      return previousFiles.filter((file) => file.id !== id)
    })
  }

  const handleUpdateFileName = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setFiles((previousFiles) => {
      return previousFiles.map((file) => {
        if (file.id === id) {
          file.name = event.target.value
          file.status = 'editing'
        }
        return file
      })
    })
  }

  const handleUpdateFileContent = (id: string) => (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles((previousFiles) => {
      return previousFiles.map((file) => {
        if (file.id === id) {
          file.content = event.target.value
          file.status = 'editing'
        }
        return file
      })
    })
  }

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
