import React, { FunctionComponent, Fragment } from 'react'
import { getLastChunkPage, getFirstChunkPage } from './Pagination.viewStates'
import { PaginationItem } from './PaginationItem'
import { PaginationLink } from './PaginationLink'

import styles from './pagination.module.scss'

// Pagination.propTypes = {
//   activePage: number.isRequired,
//   setActivePage: func.isRequired,
//   totalPages: number.isRequired,
//   arrowsOnly: bool,
//   /** How many number boxes we should show */
//   chunkSize: number,
//   className: string,
//   disabled: bool,
//   isMobile: bool,
//   listClassName: string,
// pageSize: (props) => handleCustomPropType(props, 'pageSize'),
//   showForOnePage: bool,
//   styleMode: string,
// totalElements: (props) => handleCustomPropType(props, 'totalElements')
// }
// Pagination.defaultProps = {
//   arrowsOnly: false,
//   chunkSize: 5,
//   className: '',
//   isMobile: false,
//   listClassName: '',
//   pageSize: null,
//   showForOnePage: false,
//   styleMode: 'light',
//   totalElements: null,
//   disabled: false
// }

interface Props {
  activePage: number
  totalPages: number
  arrowsOnly: boolean
  /** How many number boxes we should show */
  chunkSize?: number
  className?: string
  disabled?: boolean
  isMobile?: boolean
  listClassName?: string
  pageSize?: (props)handleCustomPropType(props, 'pageSize')
  showForOnePage?: boolean
  totalElements?: (props) => typeof handleCustomPropType = (props, 'totalElements') => ()
  [rest: string]: unknown // ...rest property
}

const handleCustomPropType = (props: { [x: string]: any; arrowsOnly: any }, propName: React.ReactText) => {
  // eslint-disable-line
  if (props.arrowsOnly && (props[propName] === undefined || typeof props[propName] !== 'number')) {
    return new Error(
      `
${propName} is required when "arrowsOnly" prop is true.
It is expected to be a number
`
    )
  }
}

const Pagination: FunctionComponent<Props> = ({
  activePage,
  totalPages,
  arrowsOnly = false,
  chunkSize = 5,
  className = '',
  isMobile = false,
  listClassName = '',
  pageSize = null,
  showForOnePage = false,
  totalElements = null,
  disabled = false,
  ...rest
}) => {
  const setActivePage = (page: number) => () => {
    if (page !== activePage) {
      setActivePage(page)
    }
  }
  const renderPages = () => {
    const pages = [
      // first page
      <PaginationItem active={activePage === 1} key="first-page" disabled={disabled}>
        <PaginationLink onClick={setActivePage(1)} disabled={disabled}>
          1
        </PaginationLink>
      </PaginationItem>
    ]
    if (totalPages <= chunkSize + 2) {
      for (let page = 1; page <= totalPages; page += 1) {
        if (page === 1) continue // eslint-disable-line
        pages.push(
          <PaginationItem active={activePage === page} key={page} disabled={disabled}>
            <PaginationLink onClick={setActivePage(page)} disabled={disabled}>
              {page}
            </PaginationLink>
          </PaginationItem>
        )
      }
      return pages
    }
    const pagesLeft = totalPages - activePage
    const firstChunkPage = getFirstChunkPage(pagesLeft)
    const lastChunkPage = getLastChunkPage(pagesLeft)
    pages.push(
      // ellipsis
      <PaginationItem active={activePage === 2} key="prev-chunk" disabled={disabled}>
        <PaginationLink
          disabled={disabled}
          onClick={() => (activePage < chunkSize + 1 ? setActivePage(2)() : setActivePage(firstChunkPage - 1)())}
        >
          {activePage < chunkSize + 1 ? 2 : '...'}
        </PaginationLink>
      </PaginationItem>
    )
    for (let page = firstChunkPage; page <= lastChunkPage; page += 1) {
      if (page === 1 || page === 2) continue // eslint-disable-line
      pages.push(
        <PaginationItem active={activePage === page} key={page} disabled={disabled}>
          <PaginationLink onClick={setActivePage(page)} disabled={disabled}>
            {page}
          </PaginationLink>
        </PaginationItem>
      )
    }
    if (pagesLeft > chunkSize) {
      // show ... or second to last, and last page
      const secondToLastPage = totalPages - 1
      const showEllipsis = lastChunkPage + 1 < secondToLastPage
      pages.push(
        <PaginationItem
          onClick={() => (showEllipsis ? setActivePage(lastChunkPage + 1)() : setActivePage(secondToLastPage)())}
          disabled={disabled}
          key="ellipsis-page"
        >
          <PaginationLink disabled={disabled}>{showEllipsis ? '...' : secondToLastPage}</PaginationLink>
        </PaginationItem>
      )
      pages.push(
        // last page
        <PaginationItem active={activePage === totalPages} key="last-page" disabled={disabled}>
          <PaginationLink onClick={setActivePage(totalPages)} disabled={disabled}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      )
    }
    return pages
  }
  const renderMobilePages = () => {
    const pages = []
    const pagesLeft = totalPages - activePage
    let firstChunkPage = getFirstChunkPage(pagesLeft)
    let lastChunkPage = getLastChunkPage(pagesLeft)
    if (totalPages <= chunkSize + 2) {
      firstChunkPage = 1
      lastChunkPage = totalPages
    }
    for (let page = firstChunkPage; page <= lastChunkPage; page += 1) {
      pages.push(
        <PaginationItem active={activePage === page} key={page} disabled={disabled}>
          <PaginationLink onClick={setActivePage(page)} disabled={disabled}>
            {page}
          </PaginationLink>
        </PaginationItem>
      )
    }
    return pages
  }
  const renderPrevCaret = () => (
    <PaginationItem disabled={activePage === 1 || disabled} className={styles['pagination-prev']}>
      <PaginationLink
        previous
        className={arrowsOnly ? styles['arrows-only'] : ''}
        disabled={activePage === 1 || disabled}
        onClick={setActivePage(activePage - 1)}
      />
    </PaginationItem>
  )
  const renderNextCaret = () => (
    <PaginationItem disabled={activePage === totalPages || disabled} className={styles['pagination-next']}>
      <PaginationLink
        next
        className={arrowsOnly ? styles['arrows-only'] : ''}
        disabled={activePage === totalPages || disabled}
        onClick={setActivePage(activePage + 1)}
      />
    </PaginationItem>
  )

  if (totalPages < 2 && !showForOnePage) {
    return null
  }
  let result = (
    <ul className={`${styles.pagination} ${listClassName}`}>
      {renderPrevCaret()}
      {/* All the in between pages */}
      {isMobile || chunkSize * 2 >= totalPages ? renderMobilePages() : renderPages()}
      {/* Next Caret */}
      {renderNextCaret()}
    </ul>
  )

  if (arrowsOnly) {
    const pageEnd = activePage * pageSize
    const pageRange = pageEnd > totalElements ? totalElements : pageEnd
    const pageBeginning = pageEnd - pageSize + 1
    result = (
      <Fragment>
        <div className={styles['page-quantity']}>
          {pageBeginning}-{pageRange} of {totalElements}
        </div>
        <ul className={`${styles.pagination} ${listClassName} ${styles['arrows-only-ul']}`}>
          {renderPrevCaret()}
          {renderNextCaret()}
        </ul>
      </Fragment>
    )
  }
  return (
    <nav className={`${styles['pagination-wrapper']} ${className}`.trim()} aria-label="pagination" {...rest}>
      {result}
    </nav>
  )
}

export default Pagination
