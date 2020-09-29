import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const GelMemoryFoam: React.FunctionComponent<Props> = ({
  width = '25',
  height = '24',
  fillColor = '#2D2926',
  ...rest
}) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 25 24" {...rest}>
    <mask id="ezkcok3fca" width="25" height="25" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M23.51 0H2.65c-.395-.003-.775.152-1.057.43-.28.277-.44.655-.443 1.05V21.2c-.002.133.053.26.15.35.094.09.22.14.35.14h22.86c.27 0 .49-.22.49-.49V1.48C24.99.663 24.327.005 23.51 0zM5.08 1H2.65c-.27 0-.494.21-.51.48v.25h2.51L5.08 1zM2.14 19.74h2.49l.57 1h-3l-.06-1zm19 1l.52-.9H24v.9h-2.86zM24 1.47v.25h-2.26L21.31 1h2.2c.268 0 .49.212.5.48L24 1.47zm-2.25 12.67l-1.36 2.33 1.33 2.26H24v-4.59h-2.25zm-9.93 5.6h2.7l.56 1h-3.82l.56-1zm-7.16-5.68h-2.5l-.02 4.65h2.52L6 16.38l-1.34-2.32zm1.34-9L4.65 7.37H2.14V2.73h2.5L6 5.06zm5.81-3.34h2.75l.49-.72h-3.66l.42.72zm9.91 5.68l-1.34-2.33 1.36-2.33H24V7.4h-2.28zm.07 1.06l-1.36 2.33 1.31 2.33h2.3V8.46h-2.25zm-6.36 5.09l1.33-2.3h2.74l1.33 2.3-1.35 2.33h-2.72l-1.33-2.33zm-.88.5h-2.7l-1.37 2.33 1.35 2.33h2.72l1.36-2.33-1.36-2.33zM6.9 11.24h2.7l1.4 2.31-1.36 2.33H6.89l-1.35-2.33 1.36-2.31zM4.66 13L6 10.73 4.65 8.4H2.14V13h2.52zm6.26-5.1l-1.35 2.31H6.89L5.54 7.88l1.34-2.31h2.7l1.34 2.33zm.88-.53h2.71l1.36-2.31-1.35-2.33h-2.71l-1.34 2.33 1.33 2.31zm4.07 3.34L14.53 13h-2.7l-1.35-2.29 1.34-2.31h2.72l1.33 2.31zm.93-5.13l-1.37 2.33 1.35 2.3h2.75l1.32-2.3-1.34-2.33H16.8zm4.03-3.34l-1.32 2.33H16.8l-1.35-2.33.73-1.24h3.95l.7 1.24zM10.25 1h-4l-.72 1.23 1.35 2.33h2.7l1.4-2.34L10.25 1zm-4.7 18.22l1.34-2.33h2.7L11 19.22l-.86 1.48H6.4l-.85-1.48zm10.72 1.48H20l.81-1.48-1.34-2.33h-2.7l-1.36 2.33.86 1.48zM1.53 24H24.3v-.03c.278.011.514-.202.53-.48-.006-.136-.063-.264-.16-.36-.101-.09-.234-.138-.37-.13H1.53c-.137-.006-.271.044-.37.14-.103.091-.163.222-.163.36 0 .138.06.269.163.36.097.098.232.149.37.14z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#ezkcok3fca)">
      <path fill={fillColor} d="M-2 -3H28V27H-2z" />
    </g>
  </svg>
)

export default GelMemoryFoam