import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Heroes"/>
                    
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para enocntrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>

                <form action="">
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em Reais" />
                    
                    <buttton className="button" type="submit">
                        Cadastrar
                    </buttton>
                </form>
            </div>
        </div>
    );
}
