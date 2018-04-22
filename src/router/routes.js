import TheHomePage from '@/homepage/TheHomePage'
import TheDespesasPage from '@/despesas/TheDespesasPage'
import TheDespesasEditPage from '@/despesas/TheDespesasEditPage'

export default [
  { path: '/', name: 'home', component: TheHomePage },
  { path: '/despesas/:mes', name: 'despesas', component: TheDespesasPage},
  { path: '/despesas/:despesaId/edit', name: 'despesas-edit', component: TheDespesasEditPage }
]
