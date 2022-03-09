import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';

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

      <Modal
        isOpen={isOpenNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h1>Conteúdo do Modal</h1>
      </Modal>
    </>
  );
}
