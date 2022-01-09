import { renderHook } from '@testing-library/react-hooks'
import { useRenderCount } from './useRenderCount'

describe('use render count', () => {
  it('counts the number of times a component is rendered', () => {
    const { result, rerender } = renderHook(() => useRenderCount())
    expect(result.current).toBe(1)
    rerender()
    expect(result.current).toBe(2)
  })
})
