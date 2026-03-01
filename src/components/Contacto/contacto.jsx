    import React from "react";
    import './contacto.css';
    import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

    const Contacto = () => {
        const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0e5dd117-c025-4eb2-84cc-fdbeefa3c15e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        alert(res.message);
    }
  };



    return (
        <div id="contacto" className="contact">
        <div className="contact-title">
            <h1>Entre em Contacto!!</h1>
        </div>

        <div className="contacto-section">
            <div className="contacto-left">
            <h1>Fale Comigo!!</h1>
          <p>
Transformo ideias em estratégias eficazes e soluções organizacionais que geram resultados reais.
Estou sempre disponível para novos desafios profissionais e oportunidades de crescimento.
</p>
            <div className="contacto-details">
                <div className="contacto-detail">
                <MdEmail className="icon" />
                <p> cheilaobedtembe@gmail.com</p>
                </div>

                <div className="contacto-detail">
                <MdPhone className="icon" />
                <p>+258 844387410</p>
                </div>

                <div className="contacto-detail">
                <MdLocationOn className="icon" />
                <p>Bairro 25 de Junho “A”, Maputo, Moçambique</p>
                </div>
            </div>
            </div>
            <form onSubmit={onSubmit} className="contacto-right">
                <label htmlFor="">Seu Nome</label>
                <input type="text" placeholder="Digite o Seu Nome!! " name="Name" />
                <label htmlFor="">Seu Email</label>
                <input type="email" placeholder="Digite o seu Email!!" name="email" />
                <label htmlFor="Escreva a sua mensagem aqui!!"></label>
                <textarea name="message" rows="8" placeholder="Digite aqui a sua mensagem!!"></textarea>
                <button  type="submit"className="contact-submit">Submeter agora</button>
            </form>
            
        </div>
        </div>
    );
    };

    export default Contacto;
