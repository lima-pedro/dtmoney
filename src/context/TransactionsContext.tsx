import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/api';

interface TransactionsContextProviderPros {
    children: ReactNode
}

interface Transaction {
    _id: String,
    description: String,
    category: String,
    price: Number,
    type: String,
    date: Date
}

export const TransactionsContext = createContext<any>([]);

export function TransactionsContextProvider ({ children }: TransactionsContextProviderPros) {
    const [ transactions, setTransactions ] = useState<any>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data))
    }, [])

    function onUpdateTransactions (transaction: Transaction) {
        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, onUpdateTransactions }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}