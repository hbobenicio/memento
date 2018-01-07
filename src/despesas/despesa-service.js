import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://memento-31b51.firebaseio.com'
})

class DespesaService {
  constructor () {}

  all () {
    return axiosInstance.get('/despesas.json')
  }

  create (despesa) {
    return axiosInstance.post('/despesas.json', despesa)
  }

  delete(despesaId) {
    return axiosInstance.delete(`/despesas/${despesaId}.json`)
  }
}

export default new DespesaService()
