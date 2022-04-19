import { Body, Container, Header, HeaderText } from './styles/App.styles';
import { Item } from './types/Item'
import { items } from './data/items'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { useEffect, useState } from 'react';
import { FilterListByMonth, getCurrentMonth } from './helpers/dateFilter'

function App() {

  const [list, setList] = useState(items)
  const [ filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  
  useEffect(()=>{

    setFilteredList( FilterListByMonth(list, currentMonth) )

  },[list, currentMonth])

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>

      <Body>

        {/* área de informações */}

        {/* área de inserção */}

        {/* Tabela de itens */}


      </Body>

    </Container>
  );
}

export default App;
