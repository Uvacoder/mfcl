import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode
} from 'react';

import clsx from 'clsx'
import Button from '../Button'

import styles from './input.module.scss';

/* TODO: Dark mode input */
/* TODO: successMsg - submission success message */
/* TODO: errorMsg - submission error message */
/* TODO: Q: Does textarea come as a variation from the Input component?  */
/* TODO: > Should textarea be its own component?  */
/* TODO: > How does textarea button look, does it with a button?  */

export interface Props {
  /** Class to pass to the input wrapper */
  inputType: 'text' | 'email' | 'password' | 'number' | 'date'
  /** Class to pass to the input wrapper */
  inputClass?: string
  /** Styles to pass to each section title wrapper */
  titleStyles?: CSSProperties
  /** Styles to pass to each section content wrapper */
  contentStyles?: CSSProperties
  /** Placeholder of the Input */
  placeholder: string
  /** Option to show/hide button */
  addBtn: boolean
  /** Label for button */
  btnLabel: string  
  /** Size of the Input */
  size: 'lg' | 'md' | 'sm'
  /** Makes the input field required */
  required: boolean
  /** Makes the input field disabled */
  disabled: boolean
  /** Message to appear below the input field */
  inputFooter?: string 
  [rest: string]: unknown; // WIP...rest property
};

const Input: FunctionComponent<Props> = ({
  inputType,
  inputClass,
  titleStyles,
  contentStyles,
  placeholder = '',
  addBtn = false,
  btnLabel = 'Submit',
  size = 'lg',
  required = false,
  disabled = false,
  inputFooter,
  ...rest
}) => {
  let inputField = [];

  inputField.push(
    <input className={clsx(styles['input'], styles[size], inputClass)} {...rest}
      key="inputField"
      type={inputType}
      name="name"
      required={required}
      disabled={disabled}
      placeholder={placeholder}/>
  );
  
  if(addBtn) {
    inputField.push(<Button key="inputBtn" disabled={disabled} type="submit">{btnLabel}</Button>);
  } 

  return (
    <div className={clsx(styles['input-wrapper'])}>
      <form className={clsx(styles['input-wrapper-inner'])} {...rest}>
        {inputField}
      </form>
      <div className={clsx(styles['input-wrapper-footer'])}>{inputFooter}</div>
    </div>
  );
};

export default Input;
