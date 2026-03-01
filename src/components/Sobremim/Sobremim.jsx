import React from 'react';
import './Sobremim.css';

import Perfil from '../../assets/Perfil.jpg';

const Sobremim = () => {
  return (
    <div id='sobre' className="sobre">
      <div className="sobre-title">
        <h1>Sobre mim</h1>
      </div>
      
     <div className="sobre-sections">
        <div className="sobre-left">
          <img src={Perfil} alt="Foto de Perfil" className="sobre-img" />
        </div>
      

      <div className="sobre-right">
        <div className="sobre-para">
          <div className="sobre-para">
            <p>
              Olá, sou <strong>Cheila Obed Tembe</strong>, Gestora de Marketing licenciada pelo ISCTEM,
              com experiência consolidada nas áreas administrativa, organizacional e operacional.
              Ao longo do meu percurso, desenvolvi uma abordagem estratégica orientada para resultados,
              combinando planeamento, organização e criatividade na execução de cada projecto.
            </p>

            <p>
              A minha experiência profissional permitiu-me fortalecer competências em gestão documental,
              acompanhamento de processos e coordenação de operações ligadas à importação e exportação,
              garantindo eficiência, rigor e cumprimento de prazos.
            </p>

            <p>
              Acredito que o marketing vai além da promoção: envolve compreender pessoas,
              contextos e objectivos, transformando desafios em oportunidades sustentáveis de crescimento.
              Valorizo a comunicação clara, o trabalho em equipa e a capacidade de adaptação
              a diferentes ambientes profissionais.
            </p>

            <p>
              Sou uma profissional dinâmica, responsável e proactiva,
              com forte sentido de compromisso e orientação para a excelência.
              Encaro cada desafio como uma oportunidade de criar soluções estratégicas
              que agreguem valor real e impacto positivo.
            </p>

            <p>
              <strong>
                O meu objectivo é contribuir com visão estratégica, organização e criatividade,
                impulsionando resultados consistentes e sustentáveis.
              </strong>
            </p>
          </div>

        </div>
        <h1>Os meus conhecimentos!!</h1>

        <div className="sobre-skills">
          <p>Área Administrativa e Operacional</p>
          <hr style={{ width: "50px" }} />
        </div>

        <div className="sobre-skills">
          <p>Gestão e Planeamento</p>
          <hr style={{ width: "50px" }} />
        </div>

        <div className="sobre-skills">
          <p>Competências Interpessoais(Comunicação eficaz, trabalho em equipa)</p>
          <hr style={{ width: "50px" }} />
        </div>

        <div className="sobre-skills">
          <p>Microsoft Office (Word, Excel, PowerPoint)</p>
          <hr style={{ width: "50px" }} />
        </div>
        <div className="sobre-skills">
          <p> Tecnologias Emergentes e Tendências</p>
          <hr style={{ width: "50px" }} />
        </div>



      </div>
    </div>
</div>
  );
};

export default Sobremim;
