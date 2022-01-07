import { useEffect, useRef } from 'react'

export const useRenderCount = (): number => {
  const count = useRef(1)

  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    count.current += 1
  })

  return count.current
}
