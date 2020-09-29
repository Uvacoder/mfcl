import React, { FunctionComponent, KeyboardEvent, ReactNode } from 'react'
import clsx from 'clsx'
import Step from './Step'
import styles from './stepper.module.scss'

interface Props {
  /** Index that controls the current active step */
  activeStep: number
  /**
   * An array of objects that can have color, icon, label, dividerStyle
   * If you don't want labels, do an array of empty objects [{}, {}, {}]
   */
  steps: {
    className?: string
    color?: string
    icon?: ReactNode
    label?: ReactNode
    dividerClass?: string
  }[]
  /** className to be applied to the ul container element */
  className?: string
  /** Use this function to save the new selected index to state when clicked or arrow keyed a new step */
  selectIndex?: (index: number) => void
  /** Turns the entire stepper vertical */
  vertical?: boolean
  [rest: string]: unknown
}

const Stepper: FunctionComponent<Props> = ({ activeStep, className, color, steps, selectIndex, vertical, ...rest }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (selectIndex) {
      switch (e.key) {
        case 'Enter':
          selectIndex(index)
          break
        case 'ArrowLeft': {
          const newIndex = activeStep - 1
          if (newIndex >= 0) {
            selectIndex(newIndex)
          }
          break
        }
        case 'ArrowRight': {
          const newIndex = activeStep + 1
          if (newIndex < steps.length) {
            selectIndex(newIndex)
          }
          break
        }

        default:
          break
      }
    }
  }
  return (
    <ul className={clsx(styles['stepper-wrapper'], vertical && styles.vertical, className)} {...rest}>
      {steps.map((step: any, index) => {
        const currentOrPassed = activeStep >= index
        const firstIndex = index === 0
        return (
          <Step
            key={index}
            activeStep={activeStep === index}
            currentOrPassed={currentOrPassed}
            firstIndex={firstIndex}
            handleKeyDown={handleKeyDown}
            index={index}
            selectIndex={selectIndex}
            step={step}
            vertical={vertical}
          />
        )
      })}
    </ul>
  )
}

Stepper.defaultProps = {
  className: '',
  color: '#302926',
  vertical: false
}

export default Stepper
