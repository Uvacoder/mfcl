import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Info: React.FunctionComponent<Props> = ({ 
  width = '32',
  height = '32',
  fillColor = '#2D2926',
  variant = 'light',
  ...rest }) => {
    switch (variant) {
      case 'dark':
        return (
          <svg width={width} height={height} viewBox="0 0 30 30" fill="none" {...rest}>
            <path fill={fillColor} d="M15,30c8.3,0,15-6.7,15-15S23.3,0,15,0S0,6.7,0,15S6.7,30,15,30z"/>
            <path fill="#FFFFFF" d="M13.9,9.4c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.3-0.1-0.4V7.1c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.3-0.1,0.4-0.1h2.3
    c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.1,0.3,0.1,0.4v1.8c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.3,0.1-0.4,0.1 M13.9,24c-0.1,0-0.3,0-0.4-0.1
    c-0.1-0.1-0.1-0.3-0.1-0.4V12.1c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.3-0.1,0.4-0.1h2.3c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.1,0.3,0.1,0.4v11.4
    c0,0.1,0,0.3-0.1,0.4C16.5,24,16.4,24,16.2,24"/>
          </svg>
        )
      default:
        return (
          <svg width={width} height={height} viewBox="0 0 32 32" fill="none" {...rest}>
            <path
              d="M14.8882 10.48C14.7282 10.48 14.5922 10.424 14.4802 10.312C14.3682 10.2 14.3122 10.064 14.3122 9.904V8.152C14.3122 7.976 14.3682 7.832 14.4802 7.72C14.5922 7.608 14.7282 7.552 14.8882 7.552H17.0962C17.2722 7.552 17.4162 7.608 17.5282 7.72C17.6402 7.832 17.6962 7.976 17.6962 8.152V9.904C17.6962 10.064 17.6322 10.2 17.5042 10.312C17.3922 10.424 17.2562 10.48 17.0962 10.48H14.8882ZM14.9842 25C14.8242 25 14.6882 24.944 14.5762 24.832C14.4642 24.72 14.4082 24.584 14.4082 24.424V13.096C14.4082 12.92 14.4642 12.784 14.5762 12.688C14.6882 12.576 14.8242 12.52 14.9842 12.52H17.0242C17.1842 12.52 17.3202 12.576 17.4322 12.688C17.5442 12.8 17.6002 12.936 17.6002 13.096V24.424C17.6002 24.584 17.5442 24.72 17.4322 24.832C17.3202 24.944 17.1842 25 17.0242 25H14.9842Z"
              fill={fillColor}
            />
            <path
              d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"
              stroke={fillColor}
              strokeWidth="1.5"
            />
          </svg>          
        )
    }
}

export default Info
