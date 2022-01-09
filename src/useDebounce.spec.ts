import { cleanup, renderHook } from '@testing-library/react-hooks'
import { useDebounce } from './useDebounce'
import * as useTimeoutModule from './useTimeout'

const callback = jest.fn()
const delay = 200
const reset = jest.fn()
const clear = jest.fn()
const useTimeout = jest.spyOn(useTimeoutModule, 'useTimeout').mockReturnValue({ reset, clear })

describe('use debounce', () => {
  beforeEach(cleanup)

  it('executes a callback after a delay unless a dependency changes', () => {
    const { rerender } = renderHook(() => useDebounce(callback, delay, ['test']))

    expect(clear).toHaveBeenCalledTimes(1)

    rerender(() => useDebounce(callback, delay, ['testing']))
    expect(reset).toHaveBeenCalledTimes(1)

    expect(useTimeout).toHaveBeenCalledWith(callback, delay)
  })
})
