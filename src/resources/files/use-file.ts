import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { File } from 'helpers/types/file'
import { v4 as uuidv4 } from 'uuid'
import localforage from 'localforage'

export const useFiles = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    const getFiles = async () => {
      const files: File[] | null = await localforage.getItem('files')

      if (!files) {
        inputRef.current?.focus()

        const newFile: File = {
          id: uuidv4(),
          name: 'Sem título',
          content: '',
          active: true,
          status: 'saved',
        }

        setFiles([newFile])

        await localforage.setItem('files', [newFile])
      } else {
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
    const lfSelectFile = async () => {
      await localforage.setItem('files', files.map((file) => {
        return { ...file, active: file.id === id }
      }))
    }

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

    lfSelectFile()
  }

  const handleDeleteFile = (id: string) => {
    const lfDelete = async () => {
      await localforage.setItem('files', files.filter((file) => file.id !== id))
    }

    setFiles((previousFiles) => {
      return previousFiles.filter((file) => file.id !== id)
    })

    lfDelete()
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
