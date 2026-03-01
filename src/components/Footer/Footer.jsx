import React from "react";
import './Footer.css';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import cv from '../../assets/cv.pdf'; // 👉 Importa o CV (ajuste o nome se for diferente)

const Footer = () => {
  return (
    <div className="footer">
      {/* Parte superior do rodapé */}
      <div className="footer-top">
        <div className="footer-top-left">
          <p>Entre em contacto para receber novidades e atualizações!</p>
        </div> 
      </div>

    

      {/* Parte inferior do rodapé */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2026 Cheila Obed Tembe. Todos os direitos reservados.
        </p>

        <div className="footer-bottom-right">
          {/* Botão para baixar o CV */}
          <a
            href={cv}
            download="Cheila Tembe-CV.pdf"
            className="download-cv-btn"
            aria-label="Baixar currículo em PDF"
          >
            Baixar CV
          </a>

      {/* 
          <a
            href="https://www.linkedin.com/in/liedson-gove-a18347303/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin size={24} />
          </a>
 */}
        
           
        </div>
      </div>
    </div>
  );
};

export default Footer;
