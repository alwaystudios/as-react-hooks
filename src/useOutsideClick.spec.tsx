/**
 * @jest-environment jsdom
 */

import { useOutsideClick } from './useOutsideClick'
import React, { useRef } from 'react'
import { fireEvent, render } from '@testing-library/react'

describe('useOutsideClick', () => {
  it('handles inside and outside clicks', () => {
    const outerNode = document.createElement('div')
    document.body.appendChild(outerNode)

    const fn = jest.fn()
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener')

    const TestComponent: React.FunctionComponent = () => {
      const ref = useRef<HTMLDivElement>(null)
      useOutsideClick(ref, fn)
      return <div ref={ref}>component</div>
    }

    const wrapper = ({ children }: any) => (
      <div>
        <label>wrapper</label>
        {children}
      </div>
    )

    const { getByText, unmount } = render(<TestComponent />, { wrapper })

    fireEvent.click(getByText('component'))
    expect(fn).not.toBeCalled()

    fireEvent.click(getByText('wrapper'))
    expect(fn).toHaveBeenCalledTimes(1)

    outerNode.dispatchEvent(new Event('click', { bubbles: true }))
    expect(fn).toHaveBeenCalledTimes(2)

    unmount()
    expect(removeEventListenerSpy).toBeCalledWith('click', expect.any(Function))
  })
})
