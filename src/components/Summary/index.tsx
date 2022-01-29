import { useContext, useEffect, useState } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from '../TransactionContext';

import { Container } from "./styles";

export function Summary() {

    const { transactions } = useContext(TransactionContext);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        let soma = 0
        transactions.forEach(function(transaction){
           soma = transaction.amount + soma
        })
        setTotal(soma)
    },[transactions])
    
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{transactions.length}</strong>
            </div>
            {/* <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>R$ - 500,00</strong>
            </div> */}
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(total)}</strong>
            </div>
        </Container>
    );
}