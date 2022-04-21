//Toda manipulação de datas será feito aqui, para simplificar o código (Pegar data, Filtrar data, Mostrar nome do mês)

import { Item } from '../types/Item'

export const getCurrentMonth = () => {
  let now = new Date()
  return `${now.getFullYear()}-${now.getMonth()}`
}

export const FilterListByMonth = (list: Item[], date: string): Item[] => {

  let newList: Item[] = []
  let [year, month] = date.split('-')

  for(let i in list) {
    if(
      list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth()) === parseInt(month)+1
    ) {
      newList.push(list[i])
    }
   
  }

  return newList
}
