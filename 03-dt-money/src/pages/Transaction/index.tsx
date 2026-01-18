import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summarry";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  // type: string;
  price: number;
  category: string;
  createdAt: string;
}

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  /*
  useEffect(() => {
    fetch("http://localhost:3000/transactions").then(response => {
      response.json().then(data => {
        console.log(data);
      })
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  }, []);

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch("http://localhost:3000/transactions");
      const data = await response.json();

      console.log(data);
    }

    loadTransactions();
  }, [])
  */

  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, [])

  // será executado toda vez que o componente for inicializado
  // fetch("http://localhost:3333/transactions").then(response => {
  //   console.log(response);
  // });

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {
              transactions.map(transation => {
                return (
                  <tr key={transation.id}>
                    <td width="50%">{transation.description}</td>
                    <td>
                      <PriceHighlight variant={transation.type}>
                        {transation.type}
                      </PriceHighlight>
                    </td>
                    <td>{transation.category}</td>
                    <td>{transation.createdAt}</td>
                  </tr>
                );
              })
            }
          </tbody>

        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
};