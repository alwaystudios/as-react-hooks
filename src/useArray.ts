/* eslint-disable no-unused-vars */
import { useState } from 'react'

type UseArray<T> = {
  array: T[]
  set: (elements: T[]) => void
  push: (element: T) => void
  remove: (index: number) => void
  filter: (predicate: (value: T) => boolean) => void
  update: (index: number, newElement: T) => void
  clear: () => void
}

export const useArray = <T>(value: T[]): UseArray<T> => {
  const [array, setArray] = useState(value)

  const set = (elements: T[]) => setArray(elements)
  const push = (element: T) => setArray((a) => [...a, element])
  const remove = (index: number) =>
    setArray((a) =>
      a.reduce((acc: T[], curr: T, currIndex: number) => {
        if (currIndex === index) return acc
        return [...acc, curr]
      }, []),
    )

  const filter = (predicate: (value: T) => boolean) => setArray((a) => a.filter(predicate))

  const update = (index: number, newElement: T) =>
    setArray((a) =>
      a.reduce((acc: T[], curr: T, currIndex: number) => {
        if (currIndex === index) return [...acc, newElement]
        return [...acc, curr]
      }, []),
    )

  const clear = () => setArray([])

  return {
    array,
    set,
    push,
    remove,
    filter,
    update,
    clear,
  }
}
