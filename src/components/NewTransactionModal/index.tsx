import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
// import { api } from '../../services/api';
// import { TransactionsContext } from '../../context/TransactionsContext';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

interface TransactionInput {
    description: string,
    price: number,
    type: string,
    category: string
}

export function NewTransactionModal(
    { isOpen, onRequestClose }: NewTransactionModalProps
) {
    const [type, setType] = useState('deposit');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const { createTransaction } = useTransactions();

    function clearModal  () {
        setType('deposit');
        setDescription('');
        setPrice(0);
        setCategory('');
    }

    async function handleSubmitNewTransactionModal (event: FormEvent) {
        event.preventDefault();
        const payload: TransactionInput = {
            description,
            price: price,
            type: type,
            category: category
        }

        // const response = await api.post('/transactions', payload);
        // onUpdateTransactions(response.data);
        await createTransaction(payload)
        onRequestClose();
        clearModal();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleSubmitNewTransactionModal}>
                <h2>Cadastrar nova transa????o</h2>

                <input
                    placeholder="T??tulo"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <input
                    placeholder="Valor"
                    type="number"
                    value={price}
                    onChange={(event) =>setPrice(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Sa??da" />
                        <span>Sa??da</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}