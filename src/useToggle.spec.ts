import { act, renderHook } from '@testing-library/react-hooks'
import { useToggle } from './useToggle'

describe('use toggle', () => {
  it('toggles the state from true to false', () => {
    const { result } = renderHook(() => useToggle())

    const toggle = result.current[1]

    expect(result.current[0]).toBe(false)

    act(() => toggle())
    expect(result.current[0]).toBe(true)

    act(() => toggle())
    expect(result.current[0]).toBe(false)
  })

  it('respects a default value', () => {
    const { result } = renderHook(() => useToggle(true))

    const toggle = result.current[1]

    expect(result.current[0]).toBe(true)

    act(() => toggle())
    expect(result.current[0]).toBe(false)

    act(() => toggle())
    expect(result.current[0]).toBe(true)
  })
})
