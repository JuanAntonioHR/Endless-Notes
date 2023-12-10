import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../../App";
import footBanner from '../../../../assets/images/foot_banner.svg';
import icon from '../../../../assets/images/endless-notes-icon.png';
import './squestion.css';

export default function Login() {
  const navigate = useNavigate();

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { user, setUser } = useContext(NotesContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!question || !answer) {
      alert('Por favor llene todos los campos.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/user/security/${user.id_usuario}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            pregunta: question,
            respuesta: answer
        })
      });

      const data = await response.json();
      console.log(data);

      if (data.code === 200) {
          setUser({
            ...user,
            pregunta: question,
            respuesta: answer
          });
          alert(data.message);
          // Go to home
          navigate("/home");

      } else {
          alert(data.message);
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="screen">
      <div className="form-container-sq">
        <form className="form-card-sq" onSubmit={handleSubmit}>
          <div className="icon">
            <img src={icon} alt="icon" />
          </div>
          <p className="security-message-sq">
            Para continuar su registro se requiere una pregunta de seguridad, en caso de olvidar su contraseña.
          </p>
          <div className="text-field-sq">
            <input type="text" placeholder="Pregunta de seguridad" maxLength="40" value={question} onChange={(e) => setQuestion(e.target.value)}/>
          </div>
          <div className="text-field-sq">
            <input type="text" placeholder="Respuesta" maxLength="30" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          </div>
          <div className="form-button-sq">
            <button type="submit">Terminar registro</button>
          </div>
        </form>
      </div>
      <div className="foot-banner">
        <img src={footBanner} alt="banner" />
      </div> 
    </div>
  );
}
