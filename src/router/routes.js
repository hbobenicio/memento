import TheHomePage from '@/homepage/TheHomePage'
import TheDespesasPage from '@/despesas/TheDespesasPage'

export default [
  { path: '/', name: 'home', component: TheHomePage },
  { path: '/despesas/:mes', name: 'despesas', component: TheDespesasPage}
]
