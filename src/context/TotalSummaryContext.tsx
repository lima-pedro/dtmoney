import { createContext, useEffect, useState } from 'react';
import statements from '../mock/statements.json';

export const TotalSummaryContext = createContext<any>([]);

export function TotalSummaryContextProvider({ children }: any) {
    const [dataSummary, setDataSummary] = useState([]);

    useEffect(() => {

        // CONTINUAR DAQUI, ATUALIZAR O SUMMARYU COM O VALOR CORRETO
        // const totalCredit = statements.map()

    }, [statements])

    return (
        <TotalSummaryContext.Provider
            value={{
                dataSummary,
                setDataSummary
            }}
        >
            {{ children }}
        </TotalSummaryContext.Provider>
    )
}