import React from 'react'
import qs from 'query-string'

const FlipBook = (props) => {
  const { pdfurl, modifiedAt, width = '100%', height = '800px' } = props
  const file = window.btoa(pdfurl)
  const query = qs.stringify({ file })
  const flipbookUrl = `https://app.authorify.com/afy-api-auth/static-files/pdf-flipbook/index.html?${query}`

  return (
    <iframe
      title='digitalBook'
      height='100%'
      width='100%'
      frameBorder={0}
      scrolling='no'
      src={src}
    />
  )
}

export default FlipBook
