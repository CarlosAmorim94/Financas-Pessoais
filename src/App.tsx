import { Body, Container, Header, HeaderText } from './styles/App.styles';
import { Item } from './types/Item'
import { items } from './data/items'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { useEffect, useState } from 'react';
import { FilterListByMonth, getCurrentMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea';

function App() {

  const [ list, setList ] = useState(items)
  const [ filteredList, setFilteredList ] = useState<Item[]>([])
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth())
  const [ income, setIncome ] = useState(0)
  const [ expense, setExpense ] = useState(0)
  
  useEffect(()=>{

    setFilteredList( FilterListByMonth(list, currentMonth) )

  } , [ list, currentMonth ])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>

      <Body>

        <InfoArea
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={}
        />

        {/* área de inserção */}

        <TableArea list={filteredList} />


      </Body>

    </Container>
  );
}

export default App;
