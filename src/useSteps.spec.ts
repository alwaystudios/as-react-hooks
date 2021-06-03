import { cleanup, renderHook, act } from '@testing-library/react-hooks'
import { useSteps } from './useSteps'

describe('use steps', () => {
  beforeEach(cleanup)

  it('increments a step within the bounds of max steps', () => {
    const { result } = renderHook(() => useSteps(3))
    expect(result.current.step).toBe(1)
    act(() => result.current.incrementStep())
    expect(result.current.step).toBe(2)
    act(() => result.current.incrementStep())
    expect(result.current.step).toBe(3)
    act(() => result.current.incrementStep())
    expect(result.current.step).toBe(3)
  })

  it('decrements a step maintaining 1 as the base', () => {
    const { result } = renderHook(() => useSteps(2))
    expect(result.current.step).toBe(1)
    act(() => result.current.incrementStep())
    expect(result.current.step).toBe(2)
    act(() => result.current.decrementStep())
    act(() => result.current.decrementStep())
    expect(result.current.step).toBe(1)
  })
})
