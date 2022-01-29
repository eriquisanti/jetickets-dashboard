import { FormEvent, useContext, useState } from "react";
import { TransactionContext } from "../TransactionContext";
import Modal from "react-modal";

import { Container } from "./styles";

import CloseImg from "../../assets/close.svg";
import { MovieCategories } from "./MovieCategories";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { createTransaction } = useContext(TransactionContext);

  async function handleCreateNewTrasaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      description,
      category,
      date,
      time,
    });

    setTitle("");
    setDescription("");
    setAmount(0);
    setCategory("");
    setDate("");
    setTime("");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={CloseImg} alt="close" />
      </button>
      <Container onSubmit={handleCreateNewTrasaction}>
        <h2>Cadastrar Bilhete</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <select
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="" disabled >Categorias</option>
          {MovieCategories.categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <input type="date"
         value={date}
         onChange={(event) => setDate(event.target.value)}
        />
        <input type="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
