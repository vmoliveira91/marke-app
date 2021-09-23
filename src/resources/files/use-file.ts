import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { File } from 'helpers/types/file'
import { v4 as uuidv4 } from 'uuid'
import localforage from 'localforage'

export const useFiles = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    localforage.setItem('files', files)
  }, [files])

  useEffect(() => {
    const getFiles = async () => {
      const files = await localforage.getItem<File[]>('files')

      if (!files) {
        inputRef.current?.focus()

        const newFile: File = {
          id: uuidv4(),
          name: 'Sem título',
          content: '',
          active: true,
          status: 'saved',
        }

        window.history.replaceState(null, '', `/file/${newFile.id}`)

        setFiles([newFile])
      } else {
        const id = files.find(file => file.active)?.id

        window.history.replaceState(null, '', `/file/${id}`)

        setFiles(files)
      }
    }

    getFiles()
  }, [])

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

    window.history.replaceState(null, '', `/file/${id}`)

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

  return {
    inputRef,
    files,
    setFiles,
    handleSelectFile,
    handleDeleteFile,
    handleUpdateFileName,
    handleUpdateFileContent,
  }
}
