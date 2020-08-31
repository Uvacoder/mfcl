import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Tooltip from './index'

const trigger = <div className="trigger">trigger here</div>
const children = <div className="children">children here</div>
const initialDimensions = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 5,
  height: 5,
  width: 5
}

describe('Tooltip Component', () => {
  beforeEach(() => {
    // @ts-ignore
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 120,
        height: 120,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }
    })
  })
  it('renders a className', () => {
    const { container } = render(
      <Tooltip trigger={trigger} className="test-class-name">
        {children}
      </Tooltip>
    )
    expect(container.querySelector('.tooltip-wrapper')?.classList).toContain('test-class-name')
  })

  it('should fade in with a duration, delay, and easing prop', () => {
    const { getByTestId, getByRole } = render(
      <Tooltip
        trigger={trigger}
        duration={300}
        delay={100}
        easing="ease"
        arrowClassName="arrow"
        tipContainerClassName="tip"
      >
        {children}
      </Tooltip>
    )

    expect(getByTestId('arrow')).toHaveStyle('transition: all 300ms ease 100ms')
    expect(getByRole('tooltip')).toHaveStyle('transition: all 300ms ease 100ms')
  })

  it('should not render arrow when false and vice versa', () => {
    const { getByTestId, rerender, container } = render(
      <Tooltip trigger={trigger} arrow arrowClassName="arrow">
        {children}
      </Tooltip>
    )
    expect(getByTestId('arrow')).toBeInTheDocument()

    rerender(
      <Tooltip trigger={trigger} arrow={false}>
        {children}
      </Tooltip>
    )
    expect(container.querySelector('.tooltip-arrow')).not.toBeInTheDocument()
  })

  it('should render top positions on arrow and tipContainer', () => {
    const { getByTestId } = render(
      <Tooltip
        trigger={trigger}
        tipContainerClassName="tip"
        position="top"
        initialDimensions={initialDimensions}
        data-testid="tooltip"
      >
        {children}
      </Tooltip>
    )

    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(-50%, 0, 0)')
    fireEvent.mouseEnter(getByTestId('tooltip'))
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(-50%, -2px, 0)')
  })

  it('should render top-left positions on arrow and tipContainer', () => {
    const { getByTestId } = render(
      <Tooltip
        trigger={trigger}
        tipContainerClassName="tip"
        position="top-left"
        initialDimensions={initialDimensions}
        data-testid="tooltip"
      >
        {children}
      </Tooltip>
    )
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(-50%, 0, 0)')
    fireEvent.mouseEnter(getByTestId('tooltip'))
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(-50%, -2px, 0)')
  })

  it('should render top-right positions on arrow and tipContainer', () => {
    const { getByTestId } = render(
      <Tooltip
        trigger={trigger}
        tipContainerClassName="tip"
        position="top-right"
        initialDimensions={initialDimensions}
        data-testid="tooltip"
      >
        {children}
      </Tooltip>
    )
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(-50%, 0, 0)')
    fireEvent.mouseEnter(getByTestId('tooltip'))
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(-50%, -2px, 0)')
  })

  it('should render bottom positions on arrow and tipContainer', () => {
    const { getByTestId } = render(
      <Tooltip
        trigger={trigger}
        tipContainerClassName="tip"
        position="bottom"
        initialDimensions={initialDimensions}
        data-testid="tooltip"
      >
        {children}
      </Tooltip>
    )
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(0, -10px, 0)')
    fireEvent.mouseEnter(getByTestId('tooltip'))
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(-50%, 1px, 0)')
  })

  it('should render bottom-left positions on arrow and tipContainer', () => {
    const { getByTestId } = render(
      <Tooltip
        trigger={trigger}
        tipContainerClassName="tip"
        position="bottom-left"
        initialDimensions={initialDimensions}
        data-testid="tooltip"
      >
        {children}
      </Tooltip>
    )
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(0, -10px, 0)')
    fireEvent.mouseEnter(getByTestId('tooltip'))
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(-50%, 0, 0)')
  })

  it('should render bottom-right positions on arrow and tipContainer', () => {
    const { getByTestId } = render(
      <Tooltip
        trigger={trigger}
        tipContainerClassName="tip"
        position="bottom-right"
        initialDimensions={initialDimensions}
        data-testid="tooltip"
      >
        {children}
      </Tooltip>
    )
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(0, -10px, 0)')
    fireEvent.mouseEnter(getByTestId('tooltip'))
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(-50%, 0, 0)')
  })

  it('should render left positions on arrow and tipContainer', () => {
    const { getByTestId } = render(
      <Tooltip
        trigger={trigger}
        tipContainerClassName="tip"
        position="left"
        initialDimensions={initialDimensions}
        data-testid="tooltip"
      >
        {children}
      </Tooltip>
    )
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(0, -50%, 0)')
    fireEvent.mouseEnter(getByTestId('tooltip'))
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(0, -50%, 0)')
  })

  it('should render right positions on arrow and tipContainer', () => {
    const { getByTestId } = render(
      <Tooltip
        trigger={trigger}
        tipContainerClassName="tip"
        position="right"
        initialDimensions={initialDimensions}
        data-testid="tooltip"
      >
        {children}
      </Tooltip>
    )
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(-10px, -100%, 0)')
    fireEvent.mouseEnter(getByTestId('tooltip'))
    expect(getByTestId('arrow')).toHaveStyle('transform: rotate(-45deg) translate3d(0, -50%, 0)')
  })

  it('should not hover when false', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    const { getByTestId, rerender } = render(
      <Tooltip trigger={trigger} hover={false} data-testid="tooltip">
        {children}
      </Tooltip>
    )
    expect(getByTestId('arrow')).toHaveStyle('opacity: 0')

    fireEvent.mouseEnter(getByTestId('tooltip'))
    expect(getByTestId('arrow')).toHaveStyle('opacity: 0')

    rerender(
      <Tooltip trigger={trigger} data-testid="tooltip" onOpen={onOpen} onClose={onClose}>
        {children}
      </Tooltip>
    )
    expect(getByTestId('arrow')).toHaveStyle('opacity: 0')

    fireEvent.mouseEnter(getByTestId('tooltip'))
    expect(getByTestId('arrow')).toHaveStyle('opacity: 1')
    fireEvent.mouseLeave(getByTestId('tooltip'))

    expect(onOpen).toHaveBeenCalled()
    expect(onClose).toHaveBeenCalled()
  })

  it('should handle click and touch and keypress', () => {
    const { getByTestId } = render(
      <Tooltip trigger={trigger} hover={false} isOpen data-testid="tooltip">
        {children}
      </Tooltip>
    )

    fireEvent.keyPress(document, { key: 'Escape' })
    expect(getByTestId('arrow')).toHaveStyle('opacity: 0')

    fireEvent.click(getByTestId('tooltip'))
    expect(getByTestId('arrow')).toHaveStyle('opacity: 1')
  })
})