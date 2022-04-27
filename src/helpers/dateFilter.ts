//Toda manipulação de datas será feito aqui, para simplificar o código (Pegar data, Filtrar data, Mostrar nome do mês)

import { Item } from '../types/Item'

export const getCurrentMonth = () => {
  let now = new Date()
  return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const FilterListByMonth = (list: Item[], date: string): Item[] => {

  let newList: Item[] = []
  let [year, month] = date.split('-')

  for(let i in list) {
    if(
      list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth() +1) === parseInt(month)
    ) {
      newList.push(list[i])
    }
   
  }

  return newList
}

export const formateDate = (date: Date): string => {
  let year = date.getFullYear()
  let month = date.getMonth() +1
  let day = date.getDate()

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

const addZeroToDate = (n: number): string => {
  if(n < 10) {
    return `0${n}`
  } else {
    return `${n}`
  }
}

export const formatCurrentMonth = (currentMonth: string): string => {
  let [ year, month ] = currentMonth.split('-')
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]

  return `${months[parseInt(month) -1]} ${year}`
}

export const newDateAdjusted = (dateField: string) => {
  let [year, month, day] = dateField.split('-')
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}