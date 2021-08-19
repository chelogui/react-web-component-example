import React from 'react'
// import { Loader } from './Loader'

// import S from './styles'

const Iframe = ({ isLoading, hasError, src, onRetry }) => {
  // if (isLoading) {
  //   return <Loader height='100%' title='Generating Preview' />
  // }

  // if (hasError) {
  //   const message = (
  //     <>
  //       Something went wrong while generating the preview. <br />
  //       Please{' '}
  //       <S.Button type='link' onClick={onRetry}>
  //         Try Again
  //       </S.Button>
  //       .
  //     </>
  //   )
  //   return <S.Alert message={message} type='error' />
  // }

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

export default Iframe
