import yup from 'yup'

export const schema = yup.object().shape({
  nome: yup.string().required(),
  vencimento: yup.date().required(),
  responsavel: yup.string().required(),
  valor: yup.number().required().positive(),
  pago: yup.boolean().required()
})
