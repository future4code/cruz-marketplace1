// Mostra no console os dados chamados e recebidos da API para debuggar

const msg = text => console.log(`%c${text}`, 'color: tomato; font-size: 18px;')

const interceptor = instance => {
  if (process.env.NODE_ENV === 'development') {
    instance.interceptors.request.use(request => {
      msg('Fazendo request api jobs')
      console.log(request)
      return request
    })
    instance.interceptors.response.use(response => {
      msg('Recebendo response api jobs')
      console.log(response)
      return response
    })
  }
}

export default interceptor