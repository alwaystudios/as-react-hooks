import { useEffect, useRef } from 'react'

export const useUpdateEffect = (callback: () => void, dependencies: unknown[]): void => {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) {
      // eslint-disable-next-line functional/immutable-data
      firstRenderRef.current = false
      return
    }
    return callback()
  }, dependencies)
}
