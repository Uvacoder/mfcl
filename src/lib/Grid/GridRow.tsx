import React, { FunctionComponent, CSSProperties } from 'react'
import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  alignRow?: string
  rowStyle?: CSSProperties
}

const GridRow: FunctionComponent<Props> = ({ children, alignRow = '', rowStyle = {} }) => {
  const rowClasses = clsx('row', alignRow && `${alignRow}`)
  return (
    <div className={rowClasses} style={rowStyle}>
      {children}
    </div>
  )
}

export default GridRow
