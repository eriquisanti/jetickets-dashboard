import { useContext } from "react";
import { TransactionContext } from "../TransactionContext";
import { Container } from "./styles";

import ExcluirImg  from '../../assets/excluir.png';


export function TransactionTable() {
    const {transactions} = useContext(TransactionContext);
    const {deleteTransaction} = useContext(TransactionContext);
    console.log(transactions);
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction =>(
                        <tr key={transaction._id}>
                            <td>{transaction.title}</td>
                            <td>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat().format(new Date(transaction.date))}
                            </td>
                            <td>
                            {transaction.time}
                            </td>
                            <td>
                                <img src={ExcluirImg} alt="apagar" width="25" height="25" 
                                onClick={() => deleteTransaction(transaction._id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}