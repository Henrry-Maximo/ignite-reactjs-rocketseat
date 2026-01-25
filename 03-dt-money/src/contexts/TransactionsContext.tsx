import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  // type: string;
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode; // qualquer elemento válido do react
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  /*
    ** Troca de nome
    * loadTransactions
    * fetchTransactions
  */
  async function fetchTransactions(query?: string) {
    // const url = new URL('http://localhost:3000/transactions')

    // if (query) {
    //   url.searchParams.append('q', query);
    // }

    // const response = await fetch(url);
    // const data = await response.json();

    const response = await api.get('/transactions', {
      params: {
        q: query
      }
    });

    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <TransactionsContext.Provider value={{
       transactions, 
       fetchTransactions 
    }}>
      {children}
    </TransactionsContext.Provider>
  );
}