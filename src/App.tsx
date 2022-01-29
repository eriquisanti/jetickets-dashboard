import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./components/TransactionContext";
import { GlobalStyle } from "./styles/global";


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <GlobalStyle />
    </TransactionProvider>
  );
}
