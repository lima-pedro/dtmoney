import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/api';

// O CONTEXTO FOI REFATORADO PARA UM HOOK E NÃO NECESSITA MAIS SER USADO ESSE ARQUIVO, MANTEVE-SE APENAS PARA EXEMPLIFICAÇÃO
interface TransactionsContextProviderPros {
    children: ReactNode
}

interface TransactionsContextProps {
    transactions: Transaction[],
    createTransaction: (payload: TransactionInput) => Promise<void>;
}

interface Transaction {
    _id: string,
    description: string,
    category: string,
    price: number,
    type: string,
    date: Date
}

type TransactionInput = Omit<Transaction, '_id' | 'date'>;

export const TransactionsContext = createContext<TransactionsContextProps>(
    {} as TransactionsContextProps
);

export function TransactionsContextProvider({ children }: TransactionsContextProviderPros) {
    const [transactions, setTransactions] = useState<any>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    // function onUpdateTransactions(transaction: Transaction) {
    //     setTransactions([
    //         ...transactions,
    //         transaction
    //     ])
    // }

    async function createTransaction(payload: TransactionInput) {
        const response = await api.post('/transactions', payload);
        setTransactions([
            ...transactions,
            response.data
        ])
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, createTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}