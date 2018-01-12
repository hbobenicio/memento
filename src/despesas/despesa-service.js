import axios from 'axios'
import FirebaseUtils from '@/shared/firebase/firebase-utils'

const axiosInstance = axios.create({
  baseURL: 'https://memento-31b51.firebaseio.com'
})

class DespesaService {
  constructor () {}

  all () {
    return axiosInstance.get('/despesas.json')
      .then(FirebaseUtils.responseToList)
  }

  create (despesa) {
    return axiosInstance.post('/despesas.json', despesa)
  }

  delete(despesaId) {
    return axiosInstance.delete(`/despesas/${despesaId}.json`)
  }
}

export default new DespesaService()
