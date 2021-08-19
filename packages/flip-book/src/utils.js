import qs from 'query-string'

export const getFlipbook = (url, timestamp) => {
  const params = qs.stringify({ timestamp })
  // const file = window.btoa(`${url}?${params}`)
  const file = window.btoa(url)
  const query = qs.stringify({ file })
  console.log('Utils file ---> File, Query, Params ===>', file, query, params)

  // return `http://localhost:30210/pdf-flipbook/index.html?${query}`
  return `./flipbook/index.html?${query}`
}
