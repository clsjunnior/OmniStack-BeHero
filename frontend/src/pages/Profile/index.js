import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="be the hero" />
        <span>Bem vindo</span>
        <Link className="button" to="./new/incident">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>Caso</strong>
          <p>caso teste</p>
          <strong>Descrição</strong>
          <p>teste</p>
          <strong>Valor</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>caso teste</p>
          <strong>Descrição</strong>
          <p>teste</p>
          <strong>Valor</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>caso teste</p>
          <strong>Descrição</strong>
          <p>teste</p>
          <strong>Valor</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>caso teste</p>
          <strong>Descrição</strong>
          <p>teste</p>
          <strong>Valor</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
