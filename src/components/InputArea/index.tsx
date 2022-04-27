import { Item } from "../../types/Item";
import { Container } from "./styles";

type Props = {
  onAdd: (item: Item) => void
}


export const InputArea = ({ onAdd }: Props) => {

  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(),
      category: 'food',
      title: 'Teste' ,
      value: 250.5 ,
    }

    onAdd(newItem)
  }

  return (
      <Container>
        <button onClick={handleAddEvent}>Adicionar</button>
      </Container>
  );
}