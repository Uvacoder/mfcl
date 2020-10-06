import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  transform?: string
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const UPS: React.FunctionComponent<Props> = ({
  width = '54',
  height = '54',
  fillColor = '#2D2926',
  transform = '',
  ...rest
}) => (
  <svg width={width} height={height} viewBox="0 0 54 54" transform={transform} fill="none">
    <rect width={width} height={height} fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0" transform="scale(0.002)" />
      </pattern>
      <image
        id="image0"
        width="560"
        height="560"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)

export default UPS
