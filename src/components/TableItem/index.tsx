import { formateDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import { Category, TableColumn, TableLine, Value } from "./styles";
import { categories } from '../../data/categories'

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    return (
        <TableLine>
            <TableColumn>{formateDate(item.date)}</TableColumn>
            <TableColumn>
                <Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Category>
            </TableColumn>
            <TableColumn>{item.title}</TableColumn>
            <TableColumn>
                <Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </Value>
            </TableColumn>
        </TableLine>
    );
}