import React from 'react'
import qs from 'query-string'
import { getFlipbook } from './utils'
import { Iframe } from './components'
import S from './styles'

const FlipBook = ({ pdfUrl, modifiedAt }) => {
  console.log('pdfurl', pdfUrl)
  const file = window.btoa(pdfUrl)
  const query = qs.stringify({ file })
  const flipbookUrl = `http://localhost:3000/public/pdf-flipbook/index.html?${query}`

  const handleOnRetry = (something) => {
    console.log('something', something)
  }

  return (
    <S.Wrapper>
      <h3>Hey Jeyhun</h3>
      <Iframe
        isLoading={false}
        hasError={false}
        src={flipbookUrl}
        onRetry={handleOnRetry}
      />
    </S.Wrapper>
  )
}

export default FlipBook
