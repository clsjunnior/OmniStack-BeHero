import React, { useEffect, useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';
export default function Profile() {
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();
  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]); // executar o effect ao alterar o id

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id)); // melhor do que executar a busca novamente
    } catch (error) {
      alert('erro ao deletar o caso!');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="be the hero" />
        <span>Bem vindo, {ongName}</span>
        <Link className="button" to="./new/incident">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={() => handleLogout()}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map((incident, key) => (
          <li key={key}>
            <strong>Caso</strong>
            <p>{incident.title}</p>
            <strong>Descrição</strong>
            <p>{incident.description}</p>
            <strong>Valor</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </p>
            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
