import { useState } from 'react'

export const useToggle = (defaultValue = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(defaultValue)

  const toggle = () => setValue((current) => !current)

  return [value, toggle]
}
