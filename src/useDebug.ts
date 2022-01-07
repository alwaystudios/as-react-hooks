/* eslint-disable functional/immutable-data */
import { useEffect, useRef } from 'react'

import { useRenderCount } from './useRenderCount'

export const useDebug = (componentName: string, props: Record<string, any>): void => {
  const count = useRenderCount()
  const changedProps = useRef({})
  const prevProps = useRef(props)
  const lastRendered = useRef(Date.now())

  const propKeys = Object.keys({ ...props, ...prevProps })

  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === prevProps.current[key]) return obj
    return {
      ...obj,
      [key]: { current: props[key], previous: prevProps.current[key] },
    }
  }, {})

  const info = {
    changedProps: changedProps.current,
    count,
    lastRendered: lastRendered.current,
    timeSinceLastRender: Date.now() - lastRendered.current,
  }

  useEffect(() => {
    prevProps.current = props
    lastRendered.current = Date.now()
    console.log('useDebug', componentName, info)
  })
}
