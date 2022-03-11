import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal'; 

Modal.setAppElement('#root');

export function App() {
  const [isOpenNewTransactionModal, setModalIsOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setModalIsOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
      setModalIsOpen(false);
  }

  return (
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />

      <NewTransactionModal
        isOpen={isOpenNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      {/* <Modal
        isOpen={isOpenNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h1>Conteúdo do Modal</h1>
      </Modal> */}
    </>
  );
}
