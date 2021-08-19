import React from 'react'
import qs from 'query-string'
import { getFlipbook } from './utils'
import { Iframe } from './components'
import S from './styles'

const FlipBook = (props) => {
  const { pdfurl, modifiedAt, width = '100%', height = '800px' } = props
  const file = window.btoa(pdfurl)
  const query = qs.stringify({ file })
  const flipbookUrl = `http://localhost:30214/index.html?${query}`

  const handleOnRetry = (something) => {
    console.log('something', something)
  }

  return (
    <Iframe
      isLoading={false}
      hasError={false}
      src={flipbookUrl}
      onRetry={handleOnRetry}
    />
  )
}

export default FlipBook
