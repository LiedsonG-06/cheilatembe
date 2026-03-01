import React from "react";
import './mywork.css';

const servicos = [
  {
    id: 1,
    titulo: "Gestão de Marketing",
    descricao: "Planeamento e execução de estratégias de marketing orientadas para resultados, com foco no posicionamento da marca e crescimento sustentável."
  },
  {
    id: 2,
    titulo: "Planeamento e Organização Administrativa",
    descricao: "Gestão de processos administrativos, organização documental e acompanhamento de actividades operacionais com eficiência e rigor."
  },
  {
    id: 3,
    titulo: "Coordenação de Processos de Importação e Exportação",
    descricao: "Acompanhamento e organização de documentação, controlo de processos e apoio na tramitação de operações comerciais."
  },
  {
    id: 4,
    titulo: "Apoio Logístico e Organização de Eventos",
    descricao: "Coordenação de equipas, organização de espaços e acompanhamento operacional para garantir o sucesso de eventos e actividades institucionais."
  }
];

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>Meus Serviços</h1>
      </div>
      <div className="servicos-container">
        {servicos.map((servico) => (
          <div key={servico.id} className="servico-card">
            <h2>{servico.titulo}</h2>
            <p>{servico.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
