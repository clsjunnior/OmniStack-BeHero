import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the hero" />
          <h1>Novo Caso</h1>
          <p>Cadastre um novo cas para a ONG</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o home
          </Link>
        </section>
        <form>
          <input placeholder="Titulo do Caso" />
          <textarea placeholder="Descrição do Caso"></textarea>
          <input placeholder="Valor em Reais" />
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
