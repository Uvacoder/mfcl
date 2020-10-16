import React, { CSSProperties, forwardRef, useEffect, FunctionComponent, ReactNode, useState } from 'react'
import useForwardedRef from '../utils/useForwardedRef'
import clsx from 'clsx'
import styles from './textarea.module.scss'

interface Props {
  /** Class to pass to the textarea wrapper */
  className?: string
  /** Syles to pass to the textarea element */
  fieldStyling?: CSSProperties
  /** Styles to pass to the wrapper element */
  wrapperStyling?: CSSProperties
  /** Apply error styling */
  error?: boolean
  /** Label for textarea field */
  label?: string | ReactNode
  /** Message for input submission  */
  textAreaMessage?: string
  /** Field and label name */
  name?: string
  /** You already know what this is for. Why are you looking up the description? */
  onChange?: Function
  [rest: string]: unknown // ...rest property
}

const Textarea: FunctionComponent<Props> = forwardRef<HTMLInputElement, Props>(function TextField(props, ref) {
  const {
    className,
    fieldStyling,
    wrapperStyling,
    error = false,
    label,
    name,
    textAreaMessage,
    onChange,
    ...rest
  } = props
  const [hasValue, setHasValue] = useState(false)
  const forwardedRef = useForwardedRef(ref)
  const errorClass = error && styles.error

  const handleKeyUp = (e: any) => {
    if (e.target.value.length > 0) return
    e.target.style.height = 'inherit'
  }

  const handleKeyDown = (e: any) => {
    var scrollTop =
      window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

    // Reset field height
    e.target.style.height = 'inherit'

    // Get the computed styles for the element
    const computed = window.getComputedStyle(e.target)

    // Calculate the height
    const height =
      parseInt(computed.getPropertyValue('border-top-width'), 10) +
      parseInt(computed.getPropertyValue('padding-top'), 10) +
      (e.target.scrollHeight - 20) +
      parseInt(computed.getPropertyValue('padding-bottom'), 10) +
      parseInt(computed.getPropertyValue('border-bottom-width'), 10)

    e.target.style.height = `${height}px`
    window.scrollTo(0, scrollTop)
  }

  const formControl = (e: any) => {
    const length = e.target.value.length

    // extra checks to prevent unnecessary rerenders every keystroke
    if (hasValue && length === 0) {
      setHasValue(false)
    } else if (!hasValue && length > 0) {
      setHasValue(true)
    }

    if (onChange) {
      onChange(e)
    }
  }

  useEffect(() => {
    if ((forwardedRef as React.RefObject<HTMLInputElement>)?.current?.value) {
      setHasValue(true)
    }
  }, [])

  return (
    <div className={styles['textarea-wrapper']} style={wrapperStyling}>
      <div className={styles.inner}>
        <textarea
          className={clsx(styles.input, errorClass, hasValue && styles['has-value'], className)}
          name={name}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onChange={formControl}
          ref={forwardedRef}
          {...rest}
        />
        {label && (
          <label htmlFor={name} className={clsx(styles.label, errorClass)}>
            {label}
          </label>
        )}
      </div>
      {textAreaMessage && <p className={clsx(styles.footer, errorClass)}>{textAreaMessage}</p>}
    </div>
  )
})

export default Textarea
