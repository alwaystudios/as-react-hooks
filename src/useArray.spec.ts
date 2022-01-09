import { cleanup, renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer'
import { useArray } from './useArray'

const data = [1, 2, 3, 4]

describe('use array', () => {
  beforeEach(cleanup)

  it('renders with the default array', () => {
    const { result } = renderHook(() => useArray(data))

    expect(result.current.array).toEqual(data)
  })

  it('sets the array', () => {
    const { result } = renderHook(() => useArray(data))

    act(() => result.current.set([1]))
    expect(result.current.array).toEqual([1])
  })

  describe('remove', () => {
    it('removes an item from the beginning of the array', () => {
      const { result } = renderHook(() => useArray(data))

      act(() => result.current.remove(0))
      expect(result.current.array).toEqual([2, 3, 4])
    })

    it('removes an item from the middle of the array', () => {
      const { result } = renderHook(() => useArray(data))

      act(() => result.current.remove(2))
      expect(result.current.array).toEqual([1, 2, 4])
    })

    it('removes an item from the end of the array', () => {
      const { result } = renderHook(() => useArray(data))

      act(() => result.current.remove(data.length - 1))
      expect(result.current.array).toEqual([1, 2, 3])
    })
  })

  it('updates the array', () => {
    const { result } = renderHook(() => useArray(data))

    act(() => result.current.update(1, 9))
    expect(result.current.array).toEqual([1, 9, 3, 4])
  })

  it('clears the array', () => {
    const { result } = renderHook(() => useArray(data))

    act(() => result.current.clear())
    expect(result.current.array).toEqual([])
  })

  it('filters the array', () => {
    const { result } = renderHook(() => useArray(data))

    act(() => result.current.filter((x) => x > 2))
    expect(result.current.array).toEqual([3, 4])
  })
})
