import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";

interface TrasactionsProps {
  _id: number;
  title: string;
  description: string;
  category: string;
  amount: number;
  date: string;
  time: string;
}

type TransactionInput = Omit<TrasactionsProps, "_id" >;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: TrasactionsProps[];
  createTransaction: (transaction: TransactionInput) => void;
  deleteTransaction: (id:number) => void;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TrasactionsProps[]>([]);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/tickets", transactionInput)
    const  transaction  = response.data.ticket;
    setTransactions([...transactions, transaction]);
  }

  function deleteTransaction(id: number) {
    api.delete(`/tickets/${id}`).then(() => {
      api
      .get("/tickets")
      .then((response) => setTransactions(response.data.tickets));
    })

    
  }

  useEffect(() => {
    api
      .get("/tickets")
      .then((response) => setTransactions(response.data.tickets));
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction, deleteTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
