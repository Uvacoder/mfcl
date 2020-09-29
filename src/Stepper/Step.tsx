import React, { FunctionComponent, ReactNode, memo, KeyboardEvent } from 'react'
import clsx from 'clsx'

import styles from './stepper.module.scss'

export interface IStep {
  className?: string
  color?: string
  icon?: ReactNode
  label?: string | ReactNode
}

interface Props {
  /**
   * Controls the current active step
   */
  activeStep: boolean
  currentOrPassed: boolean
  index: number
  step: IStep
  color?: string
  /**
   * Use this function to save the selected index
   */
  selectIndex?: Function
  handleKeyDown: (e: KeyboardEvent<HTMLDivElement>, index: number) => void
  stepClass?: string
  theNextActive?: boolean
  vertical?: boolean
}

const Step: FunctionComponent<Props> = ({
  activeStep,
  currentOrPassed,
  handleKeyDown,
  step,
  index,
  selectIndex,
  stepClass,
  theNextActive,
  vertical
}) => {
  const { color = '#d63426', icon, label } = step
  const verticalClass = vertical && styles.vertical
  const currentOrPassedClass = currentOrPassed ? styles.passed : styles['not-passed']
  const activeStepClass = theNextActive && styles['next-active']

  return (
    <li
      style={{ borderColor: color }}
      className={clsx(styles['progress-step'], verticalClass, currentOrPassedClass, activeStepClass, stepClass)}
    >
      <div
        onClick={selectIndex ? () => selectIndex(index) : undefined}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => handleKeyDown(e, index)}
        role="button"
        tabIndex={selectIndex ? 0 : -1}
        className={clsx(styles.circle, verticalClass)}
        style={
          activeStep
            ? { border: `2px solid ${color}` }
            : { border: `2px solid ${color}`, background: color, cursor: selectIndex ? 'pointer' : '' }
        }
      >
        {icon}
      </div>
      {label && <div className={clsx(styles.label, verticalClass)}>{label}</div>}
    </li>
  )
}

export default memo(Step)
