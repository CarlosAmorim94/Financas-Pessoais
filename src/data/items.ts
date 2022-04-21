import { Item } from '../types/Item'

export const items: Item[] = [
  { date: new Date(2022, 4, 6), category: 'food', title: 'McDonalds', value: 32.12 },
  { date: new Date(2022, 3, 15), category: 'food', title: 'Burger King', value: 28 },
  { date: new Date(2022, 4, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
  { date: new Date(2022, 3, 18), category: 'salary', title: 'Salário ACME', value: 4500 },
  { date: new Date(2022, 2, 21), category: 'food', title: 'Bolos', value: 310 }
]

console.log(items)