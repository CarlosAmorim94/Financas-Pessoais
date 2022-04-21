import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
import { Table, TableHeadColumn } from "./styles";

type Props = {
    list: Item[]
}


export const TableArea = ( {list}: Props) => {
    return (
        <Table>
            <thead>
                <tr>
                    <TableHeadColumn width={100}>Data</TableHeadColumn>
                    <TableHeadColumn width={130}>Categoria</TableHeadColumn>
                    <TableHeadColumn>Título</TableHeadColumn>
                    <TableHeadColumn width={150}>Valor</TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem  item={item} key={index} />
                ))}
            </tbody>
           
        </Table>
    );
}